import App from './src/components/App.js';
import showToast from 'native-toast';

(async () => {
    const app = await App();

    const root = document.getElementById('root');

    root.append(app);
})();


showToast({
    message: 'If you recognize the person in the photo, please, contact us',
    position: 'south-west',
    timeout: 30000,
    type: 'error',
    closeOnClick: true,    
})

