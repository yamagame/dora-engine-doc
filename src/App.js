import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function LoadablePage(p, loading)
{
  return Loadable({
    loader: () => import(`./containers/${p}`),
    loading,
  })
}

const Loading = () => <div>Loading...</div>;
const AdminTools = LoadablePage('AdminTools', Loading);
const ChatEngine = LoadablePage('ChatEngine', Loading);
const GamePad = LoadablePage('GamePad', Loading);
const ImageMap = LoadablePage('ImageMap', Loading);
const MICSensitivity = LoadablePage('MICSensitivity', Loading);
const OSImage = LoadablePage('OSImage', Loading);
const Password = LoadablePage('Password', Loading);
const Presentation = LoadablePage('Presentation', Loading);
const Quiz = LoadablePage('Quiz', Loading);
const ScenarioEditor = LoadablePage('ScenarioEditor', Loading);
const Log = LoadablePage('Log', Loading);
const Scheduler = LoadablePage('Scheduler', Loading);
const Sequrity = LoadablePage('Sequrity', Loading);
const SpeechToText = LoadablePage('SpeechToText', Loading);
const Spreadsheet = LoadablePage('Spreadsheet', Loading);
const Structure = LoadablePage('Structure', Loading);
const TextToSpeech = LoadablePage('TextToSpeech', Loading);
const USBMic = LoadablePage('USBMic', Loading);
const DoraScript = LoadablePage('DoraScript', Loading);
const AutoStart = LoadablePage('AutoStart', Loading);
const VoiceCancel = LoadablePage('VoiceCancel', Loading);
const PowerOff = LoadablePage('PowerOff', Loading);
const ENVVariable = LoadablePage('ENVVariable', Loading);
const RobotHead = LoadablePage('RobotHead', Loading);
const DoraBrowser = LoadablePage('DoraBrowser', Loading);
const DoraUpdate = LoadablePage('DoraUpdate', Loading);
const PrinterSupport = LoadablePage('PrinterSupport', Loading);
const AWSPolly = LoadablePage('AWSPolly', Loading);
const ExternalCommand = LoadablePage('ExternalCommand', Loading);
const GitHubScenario = LoadablePage('GitHubScenario', Loading);
const Multilingual = LoadablePage('Multilingual', Loading);
const RTC = LoadablePage('RTC', Loading);
const Translation = LoadablePage('Translation', Loading);
const Tips = LoadablePage('Tips', Loading);

const TopPage = Loadable({
  loader: () => import('./containers/TopPage'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <Header><a href={`${process.env.PUBLIC_URL}/`}>ドラエンジン ドキュメント</a></Header>
          </div>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={TopPage} />
            <Route path={`${process.env.PUBLIC_URL}/structure`} component={Structure} />
            <Route path={`${process.env.PUBLIC_URL}/scenario-editor`} component={ScenarioEditor} />
            <Route path={`${process.env.PUBLIC_URL}/log`} component={Log} />
            <Route path={`${process.env.PUBLIC_URL}/os-image`} component={OSImage} />
            <Route path={`${process.env.PUBLIC_URL}/presentation`} component={Presentation} />
            <Route path={`${process.env.PUBLIC_URL}/imagemap`} component={ImageMap} />
            <Route path={`${process.env.PUBLIC_URL}/quiz`} component={Quiz} />
            <Route path={`${process.env.PUBLIC_URL}/admin-tools`} component={AdminTools} />
            <Route path={`${process.env.PUBLIC_URL}/chat-engine`} component={ChatEngine} />
            <Route path={`${process.env.PUBLIC_URL}/scheduler`} component={Scheduler} />
            <Route path={`${process.env.PUBLIC_URL}/usb-mic`} component={USBMic} />
            <Route path={`${process.env.PUBLIC_URL}/mic-sensitivity`} component={MICSensitivity} />
            <Route path={`${process.env.PUBLIC_URL}/speech-to-text`} component={SpeechToText} />
            <Route path={`${process.env.PUBLIC_URL}/text-to-speech`} component={TextToSpeech} />
            <Route path={`${process.env.PUBLIC_URL}/spreadsheet`} component={Spreadsheet} />
            <Route path={`${process.env.PUBLIC_URL}/sequrity`} component={Sequrity} />
            <Route path={`${process.env.PUBLIC_URL}/password`} component={Password} />
            <Route path={`${process.env.PUBLIC_URL}/gamepad`} component={GamePad} />
            <Route path={`${process.env.PUBLIC_URL}/dora-script`} component={DoraScript} />
            <Route path={`${process.env.PUBLIC_URL}/auto-start`} component={AutoStart} />
            <Route path={`${process.env.PUBLIC_URL}/voice-cancel`} component={VoiceCancel} />
            <Route path={`${process.env.PUBLIC_URL}/poweroff`} component={PowerOff} />
            <Route path={`${process.env.PUBLIC_URL}/env-variable`} component={ENVVariable} />
            <Route path={`${process.env.PUBLIC_URL}/robot-head`} component={RobotHead} />
            <Route path={`${process.env.PUBLIC_URL}/dora-browser`} component={DoraBrowser} />
            <Route path={`${process.env.PUBLIC_URL}/dora-update`} component={DoraUpdate} />
            <Route path={`${process.env.PUBLIC_URL}/printer-support`} component={PrinterSupport} />
            <Route path={`${process.env.PUBLIC_URL}/aws-polly`} component={AWSPolly} />
            <Route path={`${process.env.PUBLIC_URL}/external-command`} component={ExternalCommand} />
            <Route path={`${process.env.PUBLIC_URL}/github-scenario`} component={GitHubScenario} />
            <Route path={`${process.env.PUBLIC_URL}/multilingual`} component={Multilingual} />
            <Route path={`${process.env.PUBLIC_URL}/rtc`} component={RTC} />
            <Route path={`${process.env.PUBLIC_URL}/translation`} component={Translation} />
            <Route path={`${process.env.PUBLIC_URL}/tips`} component={Tips} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
