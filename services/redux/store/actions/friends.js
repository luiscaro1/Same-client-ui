import axios from "axios";
import { friendTypes } from "./types";
import config from "../../../../config";

const { auth_api } = config;

const {ADD_FRIEND_SUCCESSFUL,UNFRIEND_SUCCESSFUL,GET_ALL_FRIENDS,FRIEND_ERROR}=friendTypes;

export const getAllFriends = () => async (dispatch) => {
    try {
      const res = await axios.get(
        auth_api.base_url + auth_api.get_all_friends
      );
  
      dispatch({ type: GET_ALL_FRIENDS, payload: res.data });
    } catch (err) {
      dispatch({ type: FRIEND_ERROR, payload: err });
    }
  };

  export const addFriend = (id) => async (dispatch,getState) => {
    const state = getState();
    const {auth} = state;

    if(auth.token){
        try{
            const res=await axios.post(
                auth_api.base_url+auth_api.add_friend_route,{
                    uid:auth.token.uid,
                    id,
                    user_name
                });
            dispatch({
                type:ADD_FRIEND_SUCCESSFUL,
                payload:res.data
        
            });
        }catch(err){
            dispatch({ type: FRIEND_ERROR, payload: err.response.data });
        }

    }
    else{
        dispatch({
            type: FRIEND_ERROR, payload: "Oops can't add at this user"
        })
    }

  };
  //ATTEMPT 1
  export const unFriend = (id) => async (dispatch,getState) => {
    const state = getState();
    const {auth} = state;

    if(auth.token){
        try{
            const res=await axios.post(
                auth_api.base_url+auth_api.unfriend_route,{
                    uid:auth.token.uid,
                    id
                   
                });
            dispatch({
                type:UNFRIEND_SUCCESSFUL,
                payload:res.data
        
            });
        }catch(err){
            dispatch({ type: FRIEND_ERROR, payload: err.response.data });
        }

    }
    else{
        dispatch({
            type: FRIEND_ERROR, payload: "Oops can't remove this user"
        })
    }

  };
