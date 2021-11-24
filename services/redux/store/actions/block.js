import axios from "axios";
import { blockTypes } from "./types";
import config from "../../../../config";

const { auth_api } = config;

const {BLOCK_SUCCESSFUL,BLOCK_ERROR,GET_ALL_BLOCKED,
   UNBLOCK_SUCCESSFUL}=blockTypes;

export const getAllBlocked = () => async (dispatch) => {
    try {
        const res = await axios.get(
            auth_api.base_url + auth_api.get_all_blocked
        );
      
          dispatch({ type: GET_ALL_BLOCKED, payload: res.data });
        } catch (err) {
          dispatch({ type: BLOCK_ERROR, payload: err });
        }
    };
    
export const block = (user_name) => async (dispatch,getState) => {
        const state = getState();
        const {auth} = state;
    
        if(auth.token){
            try{
                const res=await axios.post(auth_api.base_url+auth_api.block_route+user_name,{
                        uid:auth.token.uid,
                        user_name,

                    });
                dispatch({
                    type:BLOCK_SUCCESSFUL,
                    payload:res.data
            
                });
            }catch(err){
                dispatch({ type: BLOCK_ERROR, payload: err.response.data });
            }
    
        }
        else{
            dispatch({
                type: BLOCK_ERROR, payload: "Oops can't block this user"
            })
        }
    
    };
    
export const unBlock = (user_name) => async (dispatch,getState) => {
        const state = getState();
        const {auth} = state;
    
        if(auth.token){
            try{
                const res=await axios.put(
                    auth_api.base_url+auth_api.unblock_route+user_name,{
                        uid:auth.token.uid,
                        user_name,
                       
                    });
                dispatch({
                    type:UNBLOCK_SUCCESSFUL,
                    payload:res.data
            
                });
            }catch(err){
                dispatch({ type: BLOCK_ERROR, payload: err.response.data });
            }
    
        }
        else{
            dispatch({
                type: BLOCK_ERROR, payload: "Oops can't unblock this user"
            })
        }
    
      };
    