import React from 'react';
import {connect} from 'react-redux';
import {profileType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store";

type mapStateToPropsType = {
    profile: profileType
}

const ProfileInfo: React.FC<mapStateToPropsType> = ({profile}) => {
    return (
        <div>
            {/*<div>*/}
            {/*    <img className={'width100'} src="https://fs.tonkosti.ru/sized/c960x400/3q/3r/3q3r3fgg4544os4c440gkskgg.jpg" alt=""/>*/}
            {/*</div>*/}
            {profile
                ? <div className={'p10'}>
                    ava+description
                    <div>
                        <img src={profile.photos.large ? profile.photos.large : ''} alt="userPic"/>
                    </div>
                    <div>{profile.aboutMe}</div>
                    <div>{profile.fullName}</div>
                    <div>{profile.userId}</div>
                </div>
                : <div>Нет данных для отображения</div>
            }

        </div>
    );
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => (
    {profile: state.profilePage.profile}
)

export default connect(mapStateToProps, {})(ProfileInfo);