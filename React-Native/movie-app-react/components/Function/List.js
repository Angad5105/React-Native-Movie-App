import React from 'react'
import { Text } from 'react-native'

import { Container, Tab, Tabs, TabHeading, Icon} from 'native-base'

import Popular from './ListFunc/Popular'
import Topmovies from './ListFunc/Topmovies'
import Upcoming from './ListFunc/Upcoming'


const List = () => (
    
        <Container>
            <Tabs>
                <Tab heading={<TabHeading><Text style={{color: '#000', fontFamily: 'Baskerville', fontWeight: '700'}}>Popular</Text></TabHeading>}>
                    <Popular />
                </Tab>

                <Tab heading={<TabHeading><Text style={{color: '#000', fontFamily: 'Baskerville', fontWeight: '700'}}>Top Rated</Text></TabHeading>}>
                    <Topmovies />
                </Tab>

                <Tab heading={<TabHeading><Text style={{color: '#000', fontFamily: 'Baskerville', fontWeight: '700'}}>Upcoming</Text></TabHeading>}>
                    <Upcoming />
                </Tab>
            </Tabs>
        </Container>
    
)

export default List