<template>
  <div>
    <headerNav></headerNav>
    <div class="default-container">
      <div v-for="item in league.title" :key="item.id" class="detail-wapper">
        <div class="container">
          <div class="detail-header">
            <div class="logo">
              <img :src="item.matchimg"/>
            </div>
            <div class="content">
              <div class="title">
                <h3>{{item.match}}</h3>
              </div>
              <div class="info">
                <div class="item">
                  <img :src="item.game-img" />
                  <p>{{item.matchtime}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="match-container">
            <div v-for="item in league.body" :key="item.id" class="match-warpper">
              <div class="match-date">
                <p class="day-panel">{{item.time[0]}}</p>
                <p class="time-panel">{{item.time[1]}}</p>
              </div>
              <div class="team-panel">
                <div class="home-team">
                  <p class="team-name">{{item.team1}}</p>
                  <div v-if="item.team1 !== ''"><img :src="item.team1img" class="team-logo"/></div>
                  <div v-if="item.team1 !== ''"></div>
                </div>
                <p class="score">{{item.score}}</p>
                <div class="away-team">
                  <img :src="item.team2img" class="team-logo"/>
                  <p class="team-name">{{item.team1}}</p>
                </div>
              </div>
              <p class="match-bo">{{item.BO}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerBottom></footerBottom>
  </div>
</template>
<script>
import axios from 'axios'
import headerNav from './header'
import footerBottom from './footer'
export default {
  name: 'app',
  components: {
    headerNav: headerNav,
    footerBottom: footerBottom
  },
  data () {
    return {
      gameCurrent: 0,
      gameNav: [
        {id: '0', game: '全部游戏'},
        {id: '1', game: 'DOTA2'},
        {id: '2', game: 'CS:GO'},
        {id: '3', game: '英雄联盟'},
        {id: '4', game: '王者荣耀'}
      ],
      league: [],
      gameID: 0
    }
  },
  mounted () {
    this.gameID = this.$route.query.gameID
    // console.log(this.gameID)
    axios.get('/Match/' + this.gameID).then(response => {
      this.league = response.data
      console.log(this.league)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
  },
  methods: {
    jump (index, type, id) {
      this.gameCurrent = index
      this.$router.push({
        path: '/schedule.html',
        query: {
          type: type,
          id: id
        }
      })
    }
  }
}
</script>
<style scoped>
@import "../assets/mcss/mdetail.css";
</style>
