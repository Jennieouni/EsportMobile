<template>
  <div>
    <headerNav></headerNav>
    <div class="default-container">
      <div class="score-warpper">
        <div class="match-type-panel-wrapper d-flex flex-row">
          <a v-for="(item, index) in gameNav" :key="index"
            @click="jump(index, item.game, item.id)"
            v-bind:class="{activeType:gameCurrent==index}"
            class="type-item" href="javascript:;">
            <p>{{item.game}}</p>
            <div class="line"></div>
          </a>
        </div>
        <div v-if="this.gameCurrent == 0" class="score-list-panel">
          <div status="2" class="match-end-panel">
            <div v-for="item in scoreOver" :key="item.id" class="match-end-item match-item">
              <div class="header">
                <div class="league" @click="jumpLeague(item.eventsid, item.type, item.match)">
                  <img :src="item.eventsimg"/>
                  <p>{{item.events}}</p>
                </div>
                <div class="bo">
                  <p>{{item.BO}}</p>
                </div>
              </div>
              <div class="contianer">
                <p class="time-panel">{{item.time}}</p>
                <div class="team-panel">
                  <div class="homeTeam tag-panel">
                    <p class="team-name">{{item.team1}}</p>
                    <img :src="item.team1img" class="team-logo"/>
                  </div>
                  <div class="score active">
                    <p>{{item.score}}</p>
                  </div>
                  <div class="awayTeam tag-panel">
                    <img :src="item.team2img" class="team-logo"/>
                    <p class="team-name">{{item.team2}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="this.gameCurrent == 1" class="score-list-panel">
          <div status="2" class="match-end-panel">
            <div v-for="item in dotaScoreOver" :key="item.id" class="match-end-item match-item">
              <div class="header">
                <div class="league" @click="jumpLeague(item.eventsid, item.type, item.match)">
                  <img :src="item.eventsimg"/>
                  <p>{{item.events}}</p>
                </div>
                <div class="bo">
                  <p>{{item.BO}}</p>
                </div>
              </div>
              <div class="contianer">
                <p class="time-panel">{{item.time}}</p>
                <div class="team-panel">
                  <div class="homeTeam tag-panel">
                    <p class="team-name">{{item.team1}}</p>
                    <img :src="item.team1img" class="team-logo"/>
                  </div>
                  <div class="score active">
                    <p>{{item.score}}</p>
                  </div>
                  <div class="awayTeam tag-panel">
                    <img :src="item.team2img" class="team-logo"/>
                    <p class="team-name">{{item.team2}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="this.gameCurrent == 2" class="score-list-panel">
          <div status="2" class="match-end-panel">
            <div v-for="item in csScoreOver" :key="item.id" class="match-end-item match-item">
              <div class="header">
                <div class="league" @click="jumpLeague(item.eventsid, item.type, item.match)">
                  <img :src="item.eventsimg"/>
                  <p>{{item.events}}</p>
                </div>
                <div class="bo">
                  <p>{{item.BO}}</p>
                </div>
              </div>
              <div class="contianer">
                <p class="time-panel">{{item.time}}</p>
                <div class="team-panel">
                  <div class="homeTeam tag-panel">
                    <p class="team-name">{{item.team1}}</p>
                    <img :src="item.team1img" class="team-logo"/>
                  </div>
                  <div class="score active">
                    <p>{{item.score}}</p>
                  </div>
                  <div class="awayTeam tag-panel">
                    <img :src="item.team2img" class="team-logo"/>
                    <p class="team-name">{{item.team2}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="this.gameCurrent == 3" class="score-list-panel">
          <div status="2" class="match-end-panel">
            <div v-for="item in lolScoreOver" :key="item.id" class="match-end-item match-item">
              <div class="header">
                <div class="league" @click="jumpLeague(item.eventsid, item.type, item.match)">
                  <img :src="item.eventsimg"/>
                  <p>{{item.events}}</p>
                </div>
                <div class="bo">
                  <p>{{item.BO}}</p>
                </div>
              </div>
              <div class="contianer">
                <p class="time-panel">{{item.time}}</p>
                <div class="team-panel">
                  <div class="homeTeam tag-panel">
                    <p class="team-name">{{item.team1}}</p>
                    <img :src="item.team1img" class="team-logo"/>
                  </div>
                  <div class="score active">
                    <p>{{item.score}}</p>
                  </div>
                  <div class="awayTeam tag-panel">
                    <img :src="item.team2img" class="team-logo"/>
                    <p class="team-name">{{item.team2}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="this.gameCurrent == 4" class="score-list-panel">
          <div status="2" class="match-end-panel">
            <div v-for="item in kogScoreOver" :key="item.id" class="match-end-item match-item">
              <div class="header">
                <div class="league" @click="jumpLeague(item.eventsid, item.type, item.match)">
                  <img :src="item.eventsimg"/>
                  <p>{{item.events}}</p>
                </div>
                <div class="bo">
                  <p>{{item.BO}}</p>
                </div>
              </div>
              <div class="contianer">
                <p class="time-panel">{{item.time}}</p>
                <div class="team-panel">
                  <div class="homeTeam tag-panel">
                    <p class="team-name">{{item.team1}}</p>
                    <img :src="item.team1img" class="team-logo"/>
                  </div>
                  <div class="score active">
                    <p>{{item.score}}</p>
                  </div>
                  <div class="awayTeam tag-panel">
                    <img :src="item.team2img" class="team-logo"/>
                    <p class="team-name">{{item.team2}}</p>
                  </div>
                </div>
              </div>
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
      scoreOver: [],
      dotaScoreOver: [],
      csScoreOver: [],
      lolScoreOver: [],
      kogScoreOver: []
    }
  },
  mounted () {
    console.log(111)
    axios.get('/ScoreAppointTag/0').then(response => {
      this.scoreOver = response.data[2]
      // console.log(this.scoreOver)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/1').then(response => {
      this.dotaScoreOver = response.data[2]
      // console.log(this.dotaScoreOver)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/2').then(response => {
      this.csScoreOver = response.data[2]
      // console.log(this.csScoreOver)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/3').then(response => {
      this.lolScoreOver = response.data[2]
      // console.log(this.lolScoreOver)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/ScoreAppointTag/4').then(response => {
      this.kogScoreOver = response.data[2]
      // console.log(this.kogScoreOver)
    }).catch(error => {
      // alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
  },
  methods: {
    jump (index, type, id) {
      this.gameCurrent = index
      this.$router.push({
        path: '/finish.html',
        query: {
          type: type,
          id: id
        }
      })
    },
    jumpLeague (id, type, name) {
      this.$router.push({
        path: '/league.html',
        query: {
          gameID: id,
          type: type,
          name: name
        }
      })
    }
  }
}
</script>
<style scoped>
@import '../assets/mcss/match.css';
</style>
