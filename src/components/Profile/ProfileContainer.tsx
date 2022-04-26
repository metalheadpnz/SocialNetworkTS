import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/store";
import {getProfile, profileType, setUserProfileAC} from "../../redux/profile-reducer";
import {setFetching} from "../../redux/users-reducer";
import Preloader from "../common/Preloader";
import {useParams} from "react-router-dom";



type mapDispatchToPropsType = {
    setUserProfileAC: (profile: profileType) => void,
    setFetching: (set: boolean) => void
    getProfile: (userProfileID: number) => void
}

type mapStateToPropsType = {
    isFetching: boolean
}

type paramsType = { params: string | undefined }


class ProfileContainer extends React.Component <mapDispatchToPropsType & mapStateToPropsType & paramsType> {


    // getProfileFromServer: () => void = () => {
    //     const params = this.props.params
    //     this.props.setFetching(true)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params ? params : '2'}`)
    //         .then(response => {
    //             this.props.setUserProfileAC(response.data)
    //             this.props.setFetching(false)
    //         })
    // }

    // getProfileFromServer: () => void = () => {
    //     const params = this.props.params
    //     this.props.setFetching(true)
    //     profileAPI.getProfile(params ? +params : 2)
    //         .then(data => {
    //             this.props.setUserProfileAC(data)
    //             this.props.setFetching(false)
    //         })
    // }

    getProfileFromServer() {
        const params = this.props.params
        this.props.getProfile(params ? +params : 2)
    }


    componentDidMount(): void {
        this.getProfileFromServer()
    }


    componentDidUpdate(prevProps: Readonly<mapDispatchToPropsType & mapStateToPropsType & paramsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.params !== prevProps.params) {
            this.getProfileFromServer()
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Profile/>}
            </>

        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => (
    {
        isFetching: state.usersPage.isFetching,

    })

const mapDispatchToProps: mapDispatchToPropsType = {
    setUserProfileAC,
    setFetching,
    getProfile
}


const ProfileFuncContainer = () => {
    const params = useParams()
    return <ConnectContainer params={params.userID}/>
}

const ConnectContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

export default ProfileFuncContainer