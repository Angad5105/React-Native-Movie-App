import React, { Component } from 'react'
import {Content, Container, Footer, FooterTab, Button, Text, Icon } from 'native-base'
import Nowplaying from './Function/Nowplaying'
import Search from './Function/Search'
import List from './Function/List'


class FooterNav extends Component {

    constructor(props) {
        super(props)
        this.state= {
            index: 0
        }
    }
    switchScreen(index) {
        this.setState({
            index: index 
        })
    }

    render() {
        let AppComponent = null
        if (this.state.index == 0) {
            AppComponent = Nowplaying
        } else if (this.state.index == 1){
            AppComponent = Search
        } else {
            AppComponent = List
        }

        return(
            
            <Container>
                <Content>
                    <AppComponent />
                </Content>
            <Footer>
              <FooterTab>
              <Button vertical active={this.state.index === 0} onPress={() => this.switchScreen(0)}>
                                <Text style={{color: '#000', fontFamily: 'Baskerville', fontWeight: '700'}}>Now Playing</Text>
                            </Button>
                            <Button vertical active={this.state.index === 1} onPress={() => this.switchScreen(1)}>
                                <Text style={{color: '#000', fontFamily: 'Baskerville', fontWeight: '700'}}>Search</Text>
                            </Button>
                            <Button vertical active={this.state.index === 2} onPress={() => this.switchScreen(2)}>
                                <Text style={{color: '#000', fontFamily: 'Baskerville', fontWeight: '700'}}>List</Text>
                            </Button>
                
              </FooterTab>
            </Footer>
          </Container>
        )
    }
}


export default FooterNav