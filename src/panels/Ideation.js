import React from 'react';
import PropTypes from 'prop-types';
import {
    Panel,
    FormLayout,
    Group,
    Div,
    List,
    PanelHeader,
    HeaderButton,
    platform,
    IOS,
    Cell,
    Button
} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Done from '@vkontakte/icons/dist/24/done';

const osname = platform();

const Ideation = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="start">
                {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Choose Theme
        </PanelHeader>
        <Group title="Description">
            <Div>
                Tell us more about your event!
            </Div>
        </Group>
        <Group title="Select theme">
            { props.suggestions.length &&
            <List>
                { props.suggestions.map(theme => (
                    <Cell onClick={() => props.updateTheme(theme)}
                          asideContent={props.selectedTheme === theme ? <Icon24Done fill="var(--accent"/> : null}>
                        { theme }
                    </Cell>
                )) }
            </List>
            }
        </Group>
        <Div>
            <Button size="xl" level="2" onClick={props.go} data-to="suggestion">
                Continue
            </Button>
        </Div>
    </Panel>
);

Ideation.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    updateTheme: PropTypes.func.isRequired,
    suggestions: PropTypes.array.isRequired,
    selectedTheme: PropTypes.string
};

export default Ideation;
