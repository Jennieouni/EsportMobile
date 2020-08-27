<template>
  <div>
    <headerNav></headerNav>
    <div class="default-container">
      <div class="schedule-warpper">
        <div class="match-type-panel-wrapper d-flex flex-row">
          <a
            v-for="(item, index) in gameNav"
            :key="index"
            @click="jump(index, item.game, item.id)"
            v-bind:class="{activeType:gameCurrent==index}"
            class="type-item"
            href="javascript:;"
          >
            <p>{{item.game}}</p>
            <div class="line"></div>
          </a>
        </div>
        <div class="calender-warpper canlender-panel">
          <!-- <div class="calender-panel" id="calender-panel">
            <img src="http://qn.gunqiu.com/pcweb/rili_icon.png" class="rili-icon" />
            <p>日历</p>
            <img src="http://qn.gunqiu.com/pcweb/up_low_icon.png" class="up-low-icon" />
          </div> -->
          <div class="date-panel">
            <img src="static/mimages/down_left_icon.png">
            <p>{{this.isToday}}</p>
            <img src="static/mimages/h5_down_right_icon.png"/>
          </div>
        </div>
      </div>
      <div v-if="this.gameCurrent == 0" class="schedule-list-panel">
        <div class="match-end-panel">
          <div v-for="item in schedule" :key="item.id" class="match-end-item match-item">
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
              <p class="time-panel">{{item.matchtime}}</p>
              <div class="team-panel">
                <div class="homeTeam tag-panel">
                  <p class="team-name">{{item.team1}}</p>
                  <div v-if="item.team1img !== 'http://45.157.91.154/static/'"><img :src="item.team1img" class="team-logo"/></div>
                  <div v-if="item.team1img === 'http://45.157.91.154/static/'"></div>
                </div>
                <div class="score active">
                  <p>{{item.score}}</p>
                </div>
                <div class="awayTeam tag-panel">
                  <div v-if="item.team2img !== 'http://45.157.91.154/static/'"><img :src="item.team2img" class="team-logo"/></div>
                  <div v-if="item.team1img === 'http://45.157.91.154/static/'"></div>
                  <p class="team-name">{{item.team2}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.gameCurrent == 1" class="schedule-list-panel">
        <div class="match-end-panel">
          <div v-for="item in dotaSchedule" :key="item.id" class="match-end-item match-item">
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
              <p class="time-panel">{{item.matchtime}}</p>
              <div class="team-panel">
                <div class="homeTeam tag-panel">
                  <p class="team-name">{{item.team1}}</p>
                  <div v-if="item.team1img !== 'http://45.157.91.154/static/'"><img :src="item.team1img" class="team-logo"/></div>
                  <div v-if="item.team1img === 'http://45.157.91.154/static/'"></div>
                </div>
                <div class="score active">
                  <p>{{item.score}}</p>
                </div>
                <div class="awayTeam tag-panel">
                  <img :src="item.team2img" class="team-logo"/>
                  <div v-if="item.team2img !== 'http://45.157.91.154/static/'"><img :src="item.team2img" class="team-logo"/></div>
                  <div v-if="item.team2img === 'http://45.157.91.154/static/'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.gameCurrent == 2" class="schedule-list-panel">
        <div class="match-end-panel">
          <div v-for="item in csSchedule" :key="item.id" class="match-end-item match-item">
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
              <p class="time-panel">{{item.matchtime}}</p>
              <div class="team-panel">
                <div class="homeTeam tag-panel">
                  <p class="team-name">{{item.team1}}</p>
                  <div v-if="item.team1img !== 'http://45.157.91.154/static/'"><img :src="item.team1img" class="team-logo"/></div>
                  <div v-if="item.team1img === 'http://45.157.91.154/static/'"></div>
                </div>
                <div class="score active">
                  <p>{{item.score}}</p>
                </div>
                <div class="awayTeam tag-panel">
                  <div v-if="item.team2img !== 'http://45.157.91.154/static/'"><img :src="item.team2img" class="team-logo"/></div>
                  <div v-if="item.team2img === 'http://45.157.91.154/static/'"></div>
                  <p class="team-name">{{item.team2}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.gameCurrent == 3" class="schedule-list-panel">
        <div class="match-end-panel">
          <div v-for="item in lolSchedule" :key="item.id" class="match-end-item match-item">
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
              <p class="time-panel">{{item.matchtime}}</p>
              <div class="team-panel">
                <div class="homeTeam tag-panel">
                  <p class="team-name">{{item.team1}}</p>
                  <div v-if="item.team1img !== 'http://45.157.91.154/static/'"><img :src="item.team1img" class="team-logo"/></div>
                  <div v-if="item.team1img === 'http://45.157.91.154/static/'"></div>
                </div>
                <div class="score active">
                  <p>{{item.score}}</p>
                </div>
                <div class="awayTeam tag-panel">
                  <div v-if="item.team2img !== 'http://45.157.91.154/static/'"><img :src="item.team2img" class="team-logo"/></div>
                  <div v-if="item.team2img === 'http://45.157.91.154/static/'"></div>
                  <p class="team-name">{{item.team2}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.gameCurrent == 4" class="schedule-list-panel">
        <div class="match-end-panel">
          <div v-for="item in kogSchedule" :key="item.id" class="match-end-item match-item">
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
              <p class="time-panel">{{item.matchtime}}</p>
              <div class="team-panel">
                <div class="homeTeam tag-panel">
                  <p class="team-name">{{item.team1}}</p>
                  <div v-if="item.team1img !== 'http://45.157.91.154/static/'"><img :src="item.team1img" class="team-logo"/></div>
                  <div v-if="item.team1img === 'http://45.157.91.154/static/'"></div>
                </div>
                <div class="score active">
                  <p>{{item.score}}</p>
                </div>
                <div class="awayTeam tag-panel">
                  <img :src="item.team2img" class="team-logo"/>
                  <div v-if="item.team2img !== 'http://45.157.91.154/static/'"><img :src="item.team1img" class="team-logo"/></div>
                  <div v-if="item.team2img === 'http://45.157.91.154/static/'"></div>
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
      date: '',
      isToday: '',
      schedule: [],
      dotaSchedule: [],
      csSchedule: [],
      lolSchedule: [],
      kogSchedule: []
    }
  },
  mounted () {
    axios.get('/NowDate').then(response => {
      this.isToday = response.data[0]
      this.date = response.data[1]
      // console.log(this.date)
      axios.get('/GetWeek').then(response => {
        // console.log(response.data)
        // for ( let i = 0; i < response.data.length; i++) {
        //   let
        // }
      }).catch(error => {
        console.log(error)
      })
      axios.get('/CourseAppoint/' + this.date + '/0').then(response => {
        this.schedule = response.data
        // console.log(this.schedule)
      }).catch(error => {
        // alert('网络错误，请稍后刷新重试！')
        console.log(error)
      })
      axios.get('/CourseAppoint/' + this.date + '/1').then(response => {
        this.dotaSchedule = response.data
        // console.log(this.dotaSchedule)
      }).catch(error => {
        // alert('网络错误，请稍后刷新重试！')
        console.log(error)
      })
      axios.get('/CourseAppoint/' + this.date + '/2').then(response => {
        this.csSchedule = response.data
        // console.log(this.csSchedule)
      }).catch(error => {
        // alert('网络错误，请稍后刷新重试！')
        console.log(error)
      })
      axios.get('/CourseAppoint/' + this.date + '/3').then(response => {
        this.lolSchedule = response.data
        // console.log(this.lolSchedule)
      }).catch(error => {
        // alert('网络错误，请稍后刷新重试！')
        console.log(error)
      })
      axios.get('/CourseAppoint/' + this.date + '/4').then(response => {
        this.kogSchedule = response.data
        // console.log(this.kogSchedule)
      }).catch(error => {
        // alert('网络错误，请稍后刷新重试！')
        console.log(error)
      })
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
@import "../assets/mcss/match.css";
@import "../assets/mcss/Mdate.css";
.schedule-warpper .canlender-panel{
  padding-top: .53333vw;
  background-color: #232323;
  border-bottom: 1px solid #232323;
}
</style>
