import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Episode } from "../../entities/episode";
import { getEpisode } from "../../services/getEpisode";
import { isSuccessResponse } from "../../services/response";
import Divider from "../../ui-kit/Divider";
import Flex from "../../ui-kit/Flex";
import { characterInfoStyles } from "./characterInfoStyles";
import { episodesStyles } from "./episodesStyles";

interface IProps {
    episodesUrl: string[];
}

const hasDivider = (index: number, length: number) => {
    if (index + 1 === length) return false;
    return true;
};

function Episodes({ episodesUrl }: IProps) {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const styles = episodesStyles;

    useEffect(() => {
        episodesUrl.forEach((url) =>
            getEpisode(url).then((res) => {
                if (isSuccessResponse(res)) setEpisodes((prev) => [...prev, res.data]);
            })
        );
    }, [episodesUrl]);

    const isLoading = useMemo(() => episodes.length !== episodesUrl.length, [episodes]);

    if (isLoading) return <Text>loading...</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Episodes:</Text>
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
