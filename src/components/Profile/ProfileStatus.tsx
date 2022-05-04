import React, {ChangeEvent, ChangeEventHandler, Component} from 'react';
import {profileAPI} from "../../api/api";
import {getStatusProfile} from "../../redux/profile-reducer";

type propsType = {
    status: string,
    updateStatusProfile: (status: string) => void
}

type stateType = {
    editMode: boolean,
    status: string

}

class ProfileStatus extends Component<propsType, stateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusProfile(this.state.status)
    }

    onInputStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {

        return (
            <div>
                {!this.state.editMode
                    ? <div onDoubleClick={this.activateEditMode}
                           className='noSelect'>
                        <span>{this.props.status}</span>
                    </div>
                    : <div>
                        <input type="text"
                               value={this.state.status}
                               onBlur={this.deactivateEditMode}
                               onChange={this.onInputStatusChange}/>
                    </div>
                }
            </div>

        );
    }
}

export default ProfileStatus;