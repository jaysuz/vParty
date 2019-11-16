import React from 'react';
import PropTypes from "prop-types";
import {Button, Cell, Div, Group, HeaderButton, IOS, List, Panel, PanelHeader, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();


const Dashboard = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="suggestion">
                {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Dashboard
        </PanelHeader>
    </Panel>
);

Dashboard.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Dashboard;
