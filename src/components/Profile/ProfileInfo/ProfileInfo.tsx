import React from 'react';
import {connect} from 'react-redux';
import {profileType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store";
import defaultUserPic from '../../../img/anonimus.jpg'
import ProfileStatus from "../ProfileStatus";

type mapStateToPropsType = {
    profile: profileType
}
type addPropsFromParent = {
    updateStatusProfile: (status: string) => void
}

type propsFromParent = {
    status: string
}

const ProfileInfo: React.FC<mapStateToPropsType & addPropsFromParent & propsFromParent> = ({profile, ...restProps}) => {
    // console.log(restProps)
    return (
        <div>
            {/*ТУТ КАРТИНКА!!!!*/}
            {/*<div>*/}
            {/*    <img className={'width100'} src="https://fs.tonkosti.ru/sized/c960x400/3q/3r/3q3r3fgg4544os4c440gkskgg.jpg" alt=""/>*/}
            {/*</div>*/}
            {profile
                ? <div className={'p10'}>
                    ava+description
                    <div>
                        <img src={profile.photos.large ? profile.photos.large : defaultUserPic} alt="userPic"/>
                    </div>
                    <div>{profile.aboutMe}</div>
                    <div>{profile.fullName}</div>
                    <div>{profile.userId}</div>
                </div>
                : <div>Нет данных для отображения</div>
            }

            <ProfileStatus {...restProps}/>

        </div>
    );
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => (
    {profile: state.profilePage.profile}
)

export default connect(mapStateToProps, {})(ProfileInfo);