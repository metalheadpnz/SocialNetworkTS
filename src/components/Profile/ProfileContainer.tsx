import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/store";
import {
    getProfile,
    getStatusProfile,
    profileType,
    setUserProfileAC,
    updateStatusProfile
} from "../../redux/profile-reducer";
import {setFetching} from "../../redux/users-reducer";
import Preloader from "../common/Preloader";
import {useParams} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";


type mapDispatchToPropsType = {
    setUserProfileAC: (profile: profileType) => void,
    setFetching: (set: boolean) => void
    getProfile: (userProfileID: number) => void
    getStatusProfile: (userID: number) => void
    updateStatusProfile: (status: string) => void
}

type mapStateToPropsType = {
    isFetching: boolean
    // meID: number | null
    meID: any
    status: string
}

type paramsType = { params: string | undefined }


class ProfileContainer extends React.Component <mapDispatchToPropsType & mapStateToPropsType & paramsType> {


    componentDidMount(): void {
        this.props.getProfile(this.props.params ? +this.props.params : 8519)
        this.props.getStatusProfile(this.props.params ? +this.props.params : 8519)
    }


    componentDidUpdate(prevProps: Readonly<mapDispatchToPropsType & mapStateToPropsType & paramsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.params !== prevProps.params) {
            this.props.getProfile(this.props.params ? +this.props.params : 8519)
            this.props.getStatusProfile(this.props.params ? +this.props.params : 8519)
        }
    }

    render() {
        // console.log(this.props)
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Profile status={this.props.status}
                               updateStatusProfile={this.props.updateStatusProfile}/>}
            </>

        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => (
    {
        isFetching: state.usersPage.isFetching,
        meID: state.auth,
        status: state.profilePage.status

    })

const mapDispatchToProps: mapDispatchToPropsType = {
    setUserProfileAC,
    setFetching,
    getProfile,
    getStatusProfile,
    updateStatusProfile
}


const ProfileFuncContainer = () => {
    const params = useParams()
    //@ts-ignore
    return <ConnectContainer params={params.userID}/>
}

const ConnectContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer))

export default ProfileFuncContainer