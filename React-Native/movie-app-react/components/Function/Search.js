import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Container, Tab, Tabs, TabHeading, Icon} from 'native-base'


import Movie from './SearchFunc/Movie'
import People from './SearchFunc/People'
import Shows from './SearchFunc/Shows'



class Search extends Component {

    render() {
        return (
            
                <Container>
                    <Tabs>
                        <Tab heading={<TabHeading><Text style={{marginLeft: 10, fontFamily: 'Baskerville', fontWeight: '700'}}>Movie</Text></TabHeading>}>
                            <Movie />
                        </Tab>

                        <Tab heading={<TabHeading><Text style={{marginLeft: 10, fontFamily: 'Baskerville', fontWeight: '700'}}>Poeple</Text></TabHeading>}>
                            <People/>
                        </Tab>

                        <Tab heading={<TabHeading><Text style={{marginLeft: 10, fontFamily: 'Baskerville', fontWeight: '700'}}>TV Shows</Text></TabHeading>}>
                            <Shows />
                        </Tab>
                    </Tabs>
                </Container>
            
        )
    }
}

const styles = StyleSheet.create({
    
})

export default Search