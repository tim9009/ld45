<template>
  <div class="GameUILog UIpanel">
    <h1 class="UIpanel__title">Mission Log</h1>
    <div class="GameUILog__message" v-for="message in lastMessages">
        <div class="GameUILog__message__time">{{ message.time }}</div>
        <div class="GameUILog__message__text">{{ message.text }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameUILog',
    data() {
        return {
            messages: [
                {
                    time: '10.05.2072 10:10',
                    text: 'I just gathered some metal fragments from some debries I found.'
                },
                {
                    time: '10.05.2072 10:30',
                    text: 'This other thing happeneded, which is nice!'
                },
                {
                    time: '10.05.2072 10:10',
                    text: 'I just gathered some metal fragments from some debries I found.'
                },
                {
                    time: '10.05.2072 10:30',
                    text: 'This other thing happeneded, which is nice!'
                },
                {
                    time: '10.05.2072 10:10',
                    text: 'I just gathered some metal fragments from some debries I found.'
                },
                {
                    time: '10.05.2072 10:30',
                    text: 'This other thing happeneded, which is nice!'
                }
            ]
        }
    },
    computed: {
        lastMessages() {
            if(this.messages.length > 4) {
                return this.messages.slice(-4)
            }

            return this.messages
        }
    }
  }
</script>

<style lang="scss">
  @import '../styles/components/GameUILog';
</style>
