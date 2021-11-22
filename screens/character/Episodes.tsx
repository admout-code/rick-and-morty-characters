import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Episode } from "../../entities/episode";
import { getEpisode } from "../../services/getEpisode";
import { isSuccessResponse, ResponseStatus } from "../../services/response";
import Divider from "../../ui-kit/Divider";
import Flex from "../../ui-kit/Flex";
import Loading from "../../ui-kit/Loading";
import { episodesStyles } from "./episodesStyles";

interface IProps {
    episodesUrl: string[];
}

const hasDivider = (index: number, length: number) => {
    if (index + 1 === length) return false;
    return true;
};

const dataFetchedProperly = (data: (Episode | ResponseStatus.FAIL)[]): data is Episode[] => {
    return data.some((item) => item !== ResponseStatus.FAIL);
};

function Episodes({ episodesUrl }: IProps) {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const styles = episodesStyles;

    useEffect(() => {
        setIsLoading(true);
        const response = episodesUrl.map((url) =>
            getEpisode(url).then((res) => {
                if (isSuccessResponse(res)) return res.data;
                return res.status;
            })
        );
        Promise.all(response).then((data) => {
            if (dataFetchedProperly(data)) {
                setEpisodes(data);
            }
            setIsLoading(false);
        });
    }, [episodesUrl]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Episodes:</Text>
            {isLoading && <Loading />}
            <ScrollView style={styles.scrollView}>
                {episodes.map((episode, index) => (
                    <Flex direction="column" key={episode.id} style={styles.episode}>
                        <Text style={styles.episodeName}>
                            {episode.name} ({episode.episode})
                        </Text>
                        {hasDivider(index, episodes.length) && <Divider horizontal />}
                    </Flex>
                ))}
            </ScrollView>
        </View>
    );
}

export default Episodes;
