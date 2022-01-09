import update from "react-addons-update";    // https://scriptverse.academy/tutorials/reactjs-redux-reducer-update-array.html

const INITIAL_STATE = {
    counts: [],
    maxima: [],
}
export default function (state=INITIAL_STATE, { action, day_id, habit_id }) {
    switch (action) {
        case 'inc':
            return update(state, {
                counts: {
                    [day_id]: {
                        [habit_id]: {
                            $set: state.counts[day_id][habit_id] + 1,
                        }
                    }
                }
            });
        case 'dec':
            return update(state, {
                counts: {
                    [day_id]: {
                        [habit_id]: {
                            $set: state.counts[day_id][habit_id] - 1,
                        }
                    }
                }
            });
        case 'inc_wrap':
            return update(state, {
                counts: {
                    [day_id]: {
                        [habit_id]: {
                            $set: (state.counts[day_id][habit_id] + 1) % (state.maxima[habit_id] + 1),
                        }
                    }
                }
            });
        case 'dec_wrap':
            return update(state, {
                counts: {
                    [day_id]: {
                        [habit_id]: {
                            $set: (state.counts[day_id][habit_id] + state.maxima[habit_id]) % (state.maxima[habit_id] + 1),
                        }
                    }
                }
            });
        default:
            throw new Error(`SquareReducer recieved unknown state ${JSON.stringify(state)}`);
    }
}

