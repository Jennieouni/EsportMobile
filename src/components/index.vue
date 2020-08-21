<template>
  <div>
    <headerNav></headerNav>
    <div class="default-container">
      <div class="home-wapper">
        <div class="container">
          <div class="match-type-panel-wrapper d-flex flex-row">
            <a v-for="(item, index) in gameNav" :key="index"
              @click="jump(index, item.game, item.id)"
              v-bind:class="{activeType:gameCurrent==index}"
             class="type-item" href="javascript:;">
              <p>{{item.game}}</p>
              <div class="line"></div>
            </a>
          </div>
          <!-- banner -->
          <!-- <div class="banner-panel" onclick="hrefClicked('https://www.500dj1.com',true)">
            <img src="https://500bf.com/upload/50a200d9cb1a406d/9d1e9ed9c7cf9e98.jpg" />
          </div> -->
          <div v-if="this.gameCurrent == 0">
            <!-- 进行中的比赛 -->
            <div id="mindex_living">
              <div class="match-start-panel d-flex flex-column justify-center">
                <diV v-for="item in allMatching" :key="item.id" class="item">
                  <div class="match-item-wrapper">
                    <div class="header">
                      <div class="league-panel" @click="jumpLeague(item.id, item.type, item.match)">
                        <img :src="item.eventsimg" class="logo"/>
                        <p class="name">{{item.events}}</p>
                      </div>
                      <div @click="jumpLiving(item.id)" v-if="item.tv.length !== 0" class="videos-panel" >
                        <img data-v-9ad89d7e="" src="static/mimages/video_icon.gif" class="live-text">
                      </div>
                    </div>
                    <div class="item-row-title">
                      <div class="tag-1">
                        <p><span class="duration">{{item.now}}</span></p>
                      </div>
                      <div class="tag-2">
                        <p>{{item.BO}}</p>
                      </div>
                      <div class="tag-3">
                        <img :src="item.pooimg" alt="">
                        <p>{{item.pooreconomy}}</p>
                      </div>
                    </div>
                    <div class="item-row-team">
                      <div class="tag-1">
                        <img :src="item.team1img" class="logo"/>
                        <p>{{item.team1}}</p>
                      </div>
                      <div class="tag-2">
                        <p class="score">{{item.team1winnum}}</p>
                        <p class="kill">{{item.team1killnum}}</p>
                        <div v-for="item1 in item.team1special" :key="item1.id" class="icon-panel">
                          <img :src="item1" class="icon" />
                        </div>
                      </div>
                    </div>
                    <div class="item-row-team">
                      <div class="tag-1">
                        <img :src="item.team2img" class="logo"/>
                        <p>{{item.team2}}</p>
                      </div>
                      <div class="tag-2">
                        <p class="score">{{item.team2winnum}}</p>
                        <p class="kill">{{item.team2killnum}}</p>
                        <div v-for="item1 in item.team2special" :key="item1.id" class="icon-panel">
                        <img :src="item1" class="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 广告banner -->
            <!-- <div class="banner-panel" style="margin: 12px 0px;" onclick="hrefClicked('https://500dj1.com',true)">
              <img src="https://500bf.com/upload/50a200d9cb1a406d/9d1e9ed9c7cf9e98.jpg" />
            </div> -->
            <!-- 未开始的比赛 -->
            <div class="match-wrapper">
              <div class="match-panel-wrapper">
                <div class="match-panel-container">
                  <img src="static/mimages/match_panel_left.png.svg" />
                  <p>未开始的比赛</p>
                  <img src="static/mimages/match_panel_right.png.svg" />
                </div>
                <div class="container">
                  <div v-for="item in allMatch" :key="item.id" class="match-item">
                    <div class="league-info">
                      <div class="league" @click="jumpLeague(item.id, item.type, item.match)">
                        <img :src="item.eventsimg" class="league-info-logo"/>
                        <p class="league-info-name">{{item.events}}</p>
                      </div>
                      <p>{{item.BO}}</p>
                    </div>
                    <div class="match-info d-flex flex-row align-center">
                      <p class="match-item-time">{{item.time}}</p>
                      <p></p>
                      <div class="home-team">
                        <p class="match-item-home-name">{{item.team1}}</p>
                        <div v-if="item.team1img !== 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" :src="item.team1img" />
                        </div>
                        <div v-if="item.team1img.length === 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" src="" />
                        </div>
                      </div>
                      <p class="match-item-tag" style="min-width: 17px">--</p>
                      <div class="away-team">
                        <div v-if="item.team2img !== 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" :src="item.team2img" />
                        </div>
                        <div v-if="item.team2img === 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" src="" />
                        </div>
                        <p class="match-item-away-name">{{item.team2}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="this.gameCurrent == 1">
            <!-- 进行中的比赛 -->
            <div id="mindex_living">
              <div class="match-start-panel d-flex flex-column justify-center">
                <diV v-for="item in dotaMatching" :key="item.id" class="item">
                  <div class="match-item-wrapper">
                    <div class="header">
                      <div class="league-panel" @click="jumpLeague(item.id, item.type, item.match)">
                        <img :src="item.eventsimg" class="logo"/>
                        <p class="name">{{item.events}}</p>
                      </div>
                      <div @click="jumpLiving(item.id)" v-if="item.tv.length !== 0" class="videos-panel">
                        <img data-v-9ad89d7e="" src="static/mimages/video_icon.gif" class="live-text">
                      </div>
                    </div>
                    <div class="item-row-title">
                      <div class="tag-1">
                        <p><span class="duration">{{item.now}}</span></p>
                      </div>
                      <div class="tag-2">
                        <p>{{item.BO}}</p>
                      </div>
                      <div class="tag-3">
                        <img :src="item.pooimg" alt="">
                        <p>{{item.pooreconomy}}</p>
                      </div>
                    </div>
                    <div class="item-row-team">
                      <div class="tag-1">
                        <img :src="item.team1img" class="logo"/>
                        <p>{{item.team1}}</p>
                      </div>
                      <div class="tag-2">
                        <p class="score">{{item.team1winnum}}</p>
                        <p class="kill">{{item.team1killnum}}</p>
                        <div v-for="item1 in item.team1special" :key="item1.id" class="icon-panel">
                          <img :src="item1" class="icon" />
                        </div>
                      </div>
                    </div>
                    <div class="item-row-team">
                      <div class="tag-1">
                        <img :src="item.team2img" class="logo"/>
                        <p>{{item.team2}}</p>
                      </div>
                      <div class="tag-2">
                        <p class="score">{{item.team2winnum}}</p>
                        <p class="kill">{{item.team2killnum}}</p>
                        <div v-for="item1 in item.team2special" :key="item1.id" class="icon-panel">
                        <img :src="item1" class="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 广告banner -->
            <!-- <div class="banner-panel" style="margin: 12px 0px;" onclick="hrefClicked('https://500dj1.com',true)">
              <img src="https://500bf.com/upload/50a200d9cb1a406d/9d1e9ed9c7cf9e98.jpg" />
            </div> -->
            <!-- 未开始的比赛 -->
            <div class="match-wrapper">
              <div class="match-panel-wrapper">
                <div class="match-panel-container">
                  <img src="static/mimages/match_panel_left.png.svg" />
                  <p>未开始的比赛</p>
                  <img src="static/mimages/match_panel_right.png.svg" />
                </div>
                <div class="container">
                  <div v-for="item in dotaMatch" :key="item.id" class="match-item">
                    <div class="league-info">
                      <div class="league" @click="jumpLeague(item.id, item.type, item.match)">
                        <img :src="item.eventsimg" class="league-info-logo"/>
                        <p class="league-info-name">{{item.events}}</p>
                      </div>
                      <p>{{item.BO}}</p>
                    </div>
                    <div class="match-info d-flex flex-row align-center">
                      <p class="match-item-time">{{item.time}}</p>
                      <p></p>
                      <div class="home-team">
                        <p class="match-item-home-name">{{item.team1}}</p>
                        <div v-if="item.team1img !== 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" :src="item.team1img" />
                        </div>
                        <div v-if="item.team1img.length === 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" src="" />
                        </div>
                      </div>
                      <p class="match-item-tag" style="min-width: 17px">--</p>
                      <div class="away-team">
                        <div v-if="item.team2img !== 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" :src="item.team2img" />
                        </div>
                        <div v-if="item.team2img === 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" src="" />
                        </div>
                        <p class="match-item-away-name">{{item.team2}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="this.gameCurrent == 2">
            <!-- 进行中的比赛 -->
            <div id="mindex_living">
              <div class="match-start-panel d-flex flex-column justify-center">
                <diV v-for="item in csMatching" :key="item.id" class="item">
                  <div class="match-item-wrapper">
                    <div class="header">
                      <div class="league-panel" @click="jumpLeague(item.id, item.type, item.match)">
                        <img :src="item.eventsimg" class="logo"/>
                        <p class="name">{{item.events}}</p>
                      </div>
                      <div @click="jumpLiving(item.id)" v-if="item.tv.length !== 0" class="videos-panel">
                        <img data-v-9ad89d7e="" src="static/mimages/video_icon.gif" class="live-text">
                      </div>
                    </div>
                    <div class="item-row-title">
                      <div class="tag-1">
                        <p><span class="duration">{{item.now}}</span></p>
                      </div>
                      <div class="tag-2">
                        <p>{{item.BO}}</p>
                      </div>
                      <div class="tag-3">
                        <img :src="item.pooimg" alt="">
                        <p>{{item.pooreconomy}}</p>
                      </div>
                    </div>
                    <div class="item-row-team">
                      <div class="tag-1">
                        <img :src="item.team1img" class="logo"/>
                        <p>{{item.team1}}</p>
                      </div>
                      <div class="tag-2">
                        <p class="score">{{item.team1winnum}}</p>
                        <p class="kill">{{item.team1killnum}}</p>
                        <div v-for="item1 in item.team1special" :key="item1.id" class="icon-panel">
                          <img :src="item1" class="icon" />
                        </div>
                      </div>
                    </div>
                    <div class="item-row-team">
                      <div class="tag-1">
                        <img :src="item.team2img" class="logo"/>
                        <p>{{item.team2}}</p>
                      </div>
                      <div class="tag-2">
                        <p class="score">{{item.team2winnum}}</p>
                        <p class="kill">{{item.team2killnum}}</p>
                        <div v-for="item1 in item.team2special" :key="item1.id" class="icon-panel">
                        <img :src="item1" class="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 广告banner -->
            <!-- <div class="banner-panel" style="margin: 12px 0px;" onclick="hrefClicked('https://500dj1.com',true)">
              <img src="https://500bf.com/upload/50a200d9cb1a406d/9d1e9ed9c7cf9e98.jpg" />
            </div> -->
            <!-- 未开始的比赛 -->
            <div class="match-wrapper">
              <div class="match-panel-wrapper">
                <div class="match-panel-container">
                  <img src="static/mimages/match_panel_left.png.svg" />
                  <p>未开始的比赛</p>
                  <img src="static/mimages/match_panel_right.png.svg" />
                </div>
                <div class="container">
                  <div v-for="item in csMatch" :key="item.id" class="match-item">
                    <div class="league-info">
                      <div class="league" @click="jumpLeague(item.id, item.type, item.match)">
                        <img :src="item.eventsimg" class="league-info-logo"/>
                        <p class="league-info-name">{{item.events}}</p>
                      </div>
                      <p>{{item.BO}}</p>
                    </div>
                    <div class="match-info d-flex flex-row align-center">
                      <p class="match-item-time">{{item.time}}</p>
                      <p></p>
                      <div class="home-team">
                        <p class="match-item-home-name">{{item.team1}}</p>
                        <div v-if="item.team1img !== 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" :src="item.team1img" />
                        </div>
                        <div v-if="item.team1img.length === 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" src="" />
                        </div>
                      </div>
                      <p class="match-item-tag" style="min-width: 17px">--</p>
                      <div class="away-team">
                        <div v-if="item.team2img !== 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" :src="item.team2img" />
                        </div>
                        <div v-if="item.team2img === 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" src="" />
                        </div>
                        <p class="match-item-away-name">{{item.team2}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="this.gameCurrent == 3">
            <!-- 进行中的比赛 -->
            <div id="mindex_living">
              <div class="match-start-panel d-flex flex-column justify-center">
                <diV v-for="item in lolMatching" :key="item.id" class="item">
                  <div class="match-item-wrapper">
                    <div class="header">
                      <div class="league-panel" @click="jumpLeague(item.id, item.type, item.match)">
                        <img :src="item.eventsimg" class="logo"/>
                        <p class="name">{{item.events}}</p>
                      </div>
                      <div @click="jumpLiving(item.id)" v-if="item.tv.length !== 0" class="videos-panel">
                        <img data-v-9ad89d7e="" src="static/mimages/video_icon.gif" class="live-text">
                      </div>
                    </div>
                    <div class="item-row-title">
                      <div class="tag-1">
                        <p><span class="duration">{{item.now}}</span></p>
                      </div>
                      <div class="tag-2">
                        <p>{{item.BO}}</p>
                      </div>
                      <div class="tag-3">
                        <img :src="item.pooimg" alt="">
                        <p>{{item.pooreconomy}}</p>
                      </div>
                    </div>
                    <div class="item-row-team">
                      <div class="tag-1">
                        <img :src="item.team1img" class="logo"/>
                        <p>{{item.team1}}</p>
                      </div>
                      <div class="tag-2">
                        <p class="score">{{item.team1winnum}}</p>
                        <p class="kill">{{item.team1killnum}}</p>
                        <div v-for="item1 in item.team1special" :key="item1.id" class="icon-panel">
                          <img :src="item1" class="icon" />
                        </div>
                      </div>
                    </div>
                    <div class="item-row-team">
                      <div class="tag-1">
                        <img :src="item.team2img" class="logo"/>
                        <p>{{item.team2}}</p>
                      </div>
                      <div class="tag-2">
                        <p class="score">{{item.team2winnum}}</p>
                        <p class="kill">{{item.team2killnum}}</p>
                        <div v-for="item1 in item.team2special" :key="item1.id" class="icon-panel">
                        <img :src="item1" class="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 广告banner -->
            <!-- <div class="banner-panel" style="margin: 12px 0px;" onclick="hrefClicked('https://500dj1.com',true)">
              <img src="https://500bf.com/upload/50a200d9cb1a406d/9d1e9ed9c7cf9e98.jpg" />
            </div> -->
            <!-- 未开始的比赛 -->
            <div class="match-wrapper">
              <div class="match-panel-wrapper">
                <div class="match-panel-container">
                  <img src="static/mimages/match_panel_left.png.svg" />
                  <p>未开始的比赛</p>
                  <img src="static/mimages/match_panel_right.png.svg" />
                </div>
                <div class="container">
                  <div v-for="item in lolMatch" :key="item.id" class="match-item">
                    <div class="league-info">
                      <div class="league" @click="jumpLeague(item.id, item.type, item.match)">
                        <img :src="item.eventsimg" class="league-info-logo"/>
                        <p class="league-info-name">{{item.events}}</p>
                      </div>
                      <p>{{item.BO}}</p>
                    </div>
                    <div class="match-info d-flex flex-row align-center">
                      <p class="match-item-time">{{item.time}}</p>
                      <p></p>
                      <div class="home-team">
                        <p class="match-item-home-name">{{item.team1}}</p>
                        <div v-if="item.team1img !== 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" :src="item.team1img" />
                        </div>
                        <div v-if="item.team1img.length === 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" src="" />
                        </div>
                      </div>
                      <p class="match-item-tag" style="min-width: 17px">--</p>
                      <div class="away-team">
                        <div v-if="item.team2img !== 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" :src="item.team2img" />
                        </div>
                        <div v-if="item.team2img === 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" src="" />
                        </div>
                        <p class="match-item-away-name">{{item.team2}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="this.gameCurrent == 4">
            <!-- 进行中的比赛 -->
            <div id="mindex_living">
              <div class="match-start-panel d-flex flex-column justify-center">
                <diV v-for="item in kogMatching" :key="item.id" class="item">
                  <div class="match-item-wrapper">
                    <div class="header">
                      <div class="league-panel" @click="jumpLeague(item.id, item.type, item.match)">
                        <img :src="item.eventsimg" class="logo"/>
                        <p class="name">{{item.events}}</p>
                      </div>
                      <div @click="jumpLiving(item.id)" v-if="item.tv.length !== 0" class="videos-panel">
                        <img data-v-9ad89d7e="" src="static/mimages/video_icon.gif" class="live-text">
                      </div>
                    </div>
                    <div class="item-row-title">
                      <div class="tag-1">
                        <p><span class="duration">{{item.now}}</span></p>
                      </div>
                      <div class="tag-2">
                        <p>{{item.BO}}</p>
                      </div>
                      <div class="tag-3">
                        <img :src="item.pooimg" alt="">
                        <p>{{item.pooreconomy}}</p>
                      </div>
                    </div>
                    <div class="item-row-team">
                      <div class="tag-1">
                        <img :src="item.team1img" class="logo"/>
                        <p>{{item.team1}}</p>
                      </div>
                      <div class="tag-2">
                        <p class="score">{{item.team1winnum}}</p>
                        <p class="kill">{{item.team1killnum}}</p>
                        <div v-for="item1 in item.team1special" :key="item1.id" class="icon-panel">
                          <img :src="item1" class="icon" />
                        </div>
                      </div>
                    </div>
                    <div class="item-row-team">
                      <div class="tag-1">
                        <img :src="item.team2img" class="logo"/>
                        <p>{{item.team2}}</p>
                      </div>
                      <div class="tag-2">
                        <p class="score">{{item.team2winnum}}</p>
                        <p class="kill">{{item.team2killnum}}</p>
                        <div v-for="item1 in item.team2special" :key="item1.id" class="icon-panel">
                        <img :src="item1" class="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 广告banner -->
            <!-- <div class="banner-panel" style="margin: 12px 0px;" onclick="hrefClicked('https://500dj1.com',true)">
              <img src="https://500bf.com/upload/50a200d9cb1a406d/9d1e9ed9c7cf9e98.jpg" />
            </div> -->
            <!-- 未开始的比赛 -->
            <div class="match-wrapper">
              <div class="match-panel-wrapper">
                <div class="match-panel-container">
                  <img src="static/mimages/match_panel_left.png.svg" />
                  <p>未开始的比赛</p>
                  <img src="static/mimages/match_panel_right.png.svg" />
                </div>
                <div class="container">
                  <div v-for="item in kogMatch" :key="item.id" class="match-item">
                    <div class="league-info">
                      <div class="league" @click="jumpLeague(item.id, item.type, item.match)">
                        <img :src="item.eventsimg" class="league-info-logo"/>
                        <p class="league-info-name">{{item.events}}</p>
                      </div>
                      <p>{{item.BO}}</p>
                    </div>
                    <div class="match-info d-flex flex-row align-center">
                      <p class="match-item-time">{{item.time}}</p>
                      <p></p>
                      <div class="home-team">
                        <p class="match-item-home-name">{{item.team1}}</p>
                        <div v-if="item.team1img !== 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" :src="item.team1img" />
                        </div>
                        <div v-if="item.team1img.length === 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" src="" />
                        </div>
                      </div>
                      <p class="match-item-tag" style="min-width: 17px">--</p>
                      <div class="away-team">
                        <div v-if="item.team2img !== 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" :src="item.team2img" />
                        </div>
                        <div v-if="item.team2img === 'http://45.157.91.154/static/'">
                          <img class="match-item-home-logo" src="" />
                        </div>
                        <p class="match-item-away-name">{{item.team2}}</p>
                      </div>
                    </div>
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
      allMatching: [],
      dotaMatching: [],
      csMatching: [],
      lolMatching: [],
      kogMatching: [],

      allMatch: [],
      dotaMatch: [],
      csMatch: [],
      lolMatch: [],
      kogMatch: []
    }
  },
  mounted () {
    // 进行中的比赛
    axios.get('/AppointMatchIng/0').then(response => {
      this.allMatching = response.data
      // console.log(this.allMatching)
    }).catch(error => {
      alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatchIng/1').then(response => {
      this.dotaMatching = response.data
      // console.log(this.dotaMatching)
    }).catch(error => {
      alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatchIng/2').then(response => {
      this.csMatching = response.data
      // console.log(this.csMatching)
    }).catch(error => {
      alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatchIng/3').then(response => {
      this.lolMatching = response.data
      // console.log(this.lolMatching)
    }).catch(error => {
      alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatchIng/4').then(response => {
      this.kogMatching = response.data
      // console.log(this.kogMatching)
    }).catch(error => {
      alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })

    // 未开始的比赛
    axios.get('/AppointMatch/0').then(response => {
      this.allMatch = response.data
      // console.log(this.allMatch)
    }).catch(error => {
      alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatch/1').then(response => {
      this.dotaMatch = response.data
      // console.log(this.match)
    }).catch(error => {
      alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatch/2').then(response => {
      this.csMatch = response.data
      // console.log(this.csMatch)
    }).catch(error => {
      alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatch/3').then(response => {
      this.lolMatch = response.data
      // console.log(this.match)
    }).catch(error => {
      alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
    axios.get('/AppointMatch/4').then(response => {
      this.kogMatch = response.data
      // console.log(this.match)
    }).catch(error => {
      alert('网络错误，请稍后刷新重试！')
      console.log(error)
    })
  },
  methods: {
    jump (index, type, id) {
      this.gameCurrent = index
      this.$router.push({
        path: '/index.html',
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
    },
    jumpLiving (id) {
      let routeData = this.$router.resolve({
        path: '/living.html',
        query: {
          // type: type,
          livingID: id
        }
      })
      window.open(routeData.href, '_blank')
    }
  }
}
</script>
<style scoped>
@import '../assets/mcss/index.css';
</style>
