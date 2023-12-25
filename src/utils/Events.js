import {computed} from "vue";

const events = new Map();

export default {

    $on(eventName,fn) {
        if (!events.has(eventName)) {
            events.set(eventName,[]);
        }
        events.get(eventName).push(fn);
    },

    $off(eventName,fn) {
      throw {
          meassage : 'Not implimented'
      };
    },

    $emit(eventName,data){
        if (event.has(eventName)) {

            events.get(eventName).forEach(fn => fn(data))
        }
    }
};