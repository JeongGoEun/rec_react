import React, { Component } from 'react';
import { SafeAreaView, Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import CustomRow from '../components/CustomRow'


export default class NewsPage extends Component {

  state = {
    data: [],
    page: 0, // here
  }

  _getData = async () => {
    console.log("fetch start")
    const response = await fetch('http://192.168.100.189:4547/user/' + this.state.page)
      //.then(res => res.json())
      //.then(json => {
      //    this.setState({
      //        data: json
      //    })
      //})
      .catch(function (error) {
        console.log(error.message);
        throw error;
      });
    const result = await response.json();
    console.log(result.page)
<<<<<<< HEAD
    if (this.state.page === result.page) { // 응답을 여러번 보내도 page를 유지시키기 위해서 
      this.setState({
        data: this.state.data.concat(result.data),
        page: result.page + 1 
      });
    }
=======
    this.setState({
      data: this.state.data.concat(result.data),
      page: result.page + 1 // 응답을 여러번 보내도 page를 유지시키기 위해서 
    });
>>>>>>> origin/feature/home
    //console.log(this.state.data)
    console.log("fetch end")
    return this.state.data
  }

  componentDidMount() {
    this._getData();
    //console.log(this.state.data);
  }

  _handleLoadMore = () => {
    this._getData();
    //console.log(this.state.page)
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <CustomRow
                id={item.id}
                title={item.title}
                opday={item.date}
                company={item.company}
                news_url={item.url}
                image_url={item.image}
              />)}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={this._handleLoadMore}
            onEndReachedThreshold={0.01}
          />
        </SafeAreaView>
        <Text>
          Test3
            </Text>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD400',
  }
});
