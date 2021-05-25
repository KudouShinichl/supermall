import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

const state = {
    Id : null,
    Pow : null
}

const store = new Vuex.Store({
    state ,
    mutations : {
        login ( state ,id,pow){
            state.Id = id
            state.Pow = pow
            console.log(state.Id);
        }
    }
})

export default store