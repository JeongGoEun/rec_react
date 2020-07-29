import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const CustomRow = ({ id, title, opday, company, news_url, image_url }) => {
    //console.log({ id, title, opday, company, news_url, image_url })
    return (
        <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(news_url)}>
            <Image source={{ uri: image_url }} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title} numberOfLines={1}>
                       {title}
                </Text>
                <Text style={styles.date} numberOfLines={1}>
                    {opday}   {company}
                </Text>
            </View>

        </TouchableOpacity >
    )
};

export default CustomRow;