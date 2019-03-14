import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, ImageBackground } from 'react-native'

const { height } = Dimensions.get('window')


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    imageStyle: {
        width: 325,
        height: 400,
    },
    titleText: {
        fontSize: 25,
        marginTop: 20,
        fontFamily: 'Baskerville',
       
    },
    section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
})

class Nowplaying extends Component {
    state = {
        results: [],
        screenHeight: 0
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    }

    componentDidMount = async() => {
        const number = Math.floor(Math.random() * 10)
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=8367b1854dccedcfc9001204de735470&language=en-US&page=${number}`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })
    }

    render() {
        const scrollEnabled = this.state.screenHeight > height

        return(
            <ScrollView
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
                style={{padding: 10, maxWidth: '100%'}}
            >
                <View style={styles.container}>
                
                    {this.state.results.slice(0 ,1).map((result, i) => {
                        return (
                            <View key={i} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Image style={styles.imageStyle} resizeMode={'contain'} source={{uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}`}} />
                                
                                <Text style={styles.titleText}><Text style={{fontWeight: '700', color: '#2f71b7'}}>Movie Name:</Text> {result.title} </Text>

                                <View style={styles.section}>
                                    <Text style={{fontSize: 18, fontFamily: 'Baskerville', color: '#000'}}><Text style={{fontWeight: '700', color: '#2f71b7'}}>Popularity:</Text> {Math.round(result.popularity)} </Text>
                                    <Text style={{fontSize: 18, marginTop: 10, fontFamily: 'Baskerville', color: '#000'}}><Text style={{fontFamily: 'Baskerville', fontWeight: '700', color: '#2f71b7'}}>Release Date:</Text> {result.release_date} </Text>
                                    <Text style={{fontSize: 18, marginTop: 10, fontFamily: 'Baskerville', color: '#000'}}><Text style={{fontFamily: 'Baskerville', fontWeight: '700', color: '#2f71b7'}}>Overview:</Text> {result.overview} </Text>
                                    
                                </View>
                            </View>
                        )
                    })} 
                   
                </View>
            </ScrollView>
        )
    }

}



export default Nowplaying