import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'

const { height } = Dimensions.get('window')

class Topmovies extends Component {

    state = {
        results: [],
        sh: 0
    }

    componentDidMount = async() => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=8367b1854dccedcfc9001204de735470&language=en-US&page=1`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })
    }

    

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ sh: contentHeight });
    }


    render() {
        const scrollEnabled = this.state.sh > height;

        return (
            <ScrollView
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
                style={{padding: 10, maxWidth: '100%'}}
            >
                <View style={styles.container}>
                    {this.state.results.slice(0, 10).map((result, i) => {
                        return (
                            <View key={i} style={styles.mainConatiner}>
                                <View> 
                                    <Image style={{width: 100, height: 100, resizeMode: 'contain'}} source={{uri: `https://image.tmdb.org/t/p/original/${result.poster_path}`}} />
                                </View>
                                <View style={{paddingLeft: 10, width: 0, flexGrow: 1}}>
                                    <View style={{}}><Text style={styles.mainTitle}>{result.title}</Text></View>
                                    <Text style={{fontSize: 16, fontFamily: 'Baskerville'}} numberOfLines={3} ellipsizeMode='tail'>{result.overview}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 150,
    },
    mainConatiner: {
        marginTop: 5,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        height: 150,
        maxWidth: '100%',
    },
    mainTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        fontFamily: 'Baskerville',
        color: '#2f71b7',
    }
})

export default Topmovies
