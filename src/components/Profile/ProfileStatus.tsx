import React, {Component} from 'react';

type propsType = {
    status: string
}

type stateType = {
    editMode: boolean
}

class ProfileStatus extends Component<propsType, stateType> {

    state = {
        editMode: false
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
                        <input type="text" value={this.props.status}
                               onBlur={this.deactivateEditMode}
                               onChange={() => {
                               }}/>
                    </div>
                }
            </div>

        );
    }
}

export default ProfileStatus;