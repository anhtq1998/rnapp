import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { Avatar, Card, List } from 'react-native-paper';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Card style={styles.card}>
          <List.Section>
            <List.Subheader style={styles.titleCard}>Số lượng công việc hôm nay</List.Subheader>
            <List.Item title="Quá hạn" left={() => <List.Icon color="red" icon="alert-circle-outline" />} right={() => <Text>0</Text>} />
            <List.Item
              title="Đến hạn"
              left={() => <List.Icon color="#FF9400" icon="clock-alert-outline" />}
              right={() => <Text>2</Text>}
            />
            <List.Item
              title="Sắp đến hạn"
              left={() => <List.Icon color="#CD0148" icon="alert-decagram-outline" />}
              right={() => <Text>7</Text>}
            />
            <List.Item
              title="Cần xác nhận"
              left={() => <List.Icon color="#1A73E8" icon="check-decagram" />}
              right={() => <Text>3</Text>}
            />
          </List.Section>
        </Card>
        <Card style={styles.card}>
          <List.Section>
            <List.Subheader style={styles.titleCard}>Danh sách việc cần làm</List.Subheader>
            <List.Item
              title="Hoàn thiện bản build cho mobile"
              description="24/03/2023"
              left={() => <List.Icon icon="check-circle" />}
              right={() => <Avatar.Image size={35} source={require('../../assets/1.png')} />}
            />
            <List.Item
              title="Sửa UI và estimate"
              description="24/03/2023"
              left={() => <List.Icon icon="check-circle" />}
              right={() => <Avatar.Image size={35} source={require('../../assets/user.jpg')} />}
            />
            <List.Item
              title="Báo cáo quý 2"
              description="24/03/2023"
              left={() => <List.Icon icon="check-circle" />}
              right={() => <Avatar.Image size={35} source={require('../../assets/drawer-cover.jpeg')} />}
            />
          </List.Section>
        </Card>
        <Card style={styles.card}>
          <List.Section>
            <List.Subheader style={styles.titleCard}>Tình trạng thực hiện công việc</List.Subheader>
            <List.Item
              title="Hoàn thiện bản build cho mobile"
              description="24/03/2023"
              left={() => <List.Icon icon="check-circle" />}
              right={() => <Avatar.Image size={35} source={require('../../assets/1.png')} />}
            />
            <List.Item
              title="Sửa UI và estimate"
              description="24/03/2023"
              left={() => <List.Icon icon="check-circle" />}
              right={() => <Avatar.Image size={35} source={require('../../assets/user.jpg')} />}
            />
            <List.Item
              title="Báo cáo quý 2"
              description="24/03/2023"
              left={() => <List.Icon icon="check-circle" />}
              right={() => <Avatar.Image size={35} source={require('../../assets/drawer-cover.jpeg')} />}
            />
          </List.Section>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  },
  scrollView:{
    marginBottom: 75
  },
  card: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10
  },
  titleCard: {
    fontSize: 18,
    fontWeight: '700',
  }
});
