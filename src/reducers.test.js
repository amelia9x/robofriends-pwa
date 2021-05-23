import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers'

describe('searchRobots', () => {
    const initalState = {
        searchField: ''
    }

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initalState, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' })
    })
})

describe('requestRobots', () => {
    const initalState = {
        robots: [],
        isPending: false,
    }

    it('should return intial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initalState)
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initalState, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initalState, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'Joe',
                email: 'joe@email.com'
            }],
        }
        )).toEqual({
            robots: [{
                id: '123',
                name: 'Joe',
                email: 'joe@email.com'
            }],
            isPending: false
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initalState, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Error',
        }
        )).toEqual({
            error: 'Error',
            robots: [],
            isPending: false
        })
    })
})