import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let ans = '';
  uploadPhoto().then((data) => { ans += data.body; }).catch(() => console.log('Signup system offline'));
  createUser().then((data) => {
    ans += ` ${data.firstName}`;
    ans += ` ${data.lastName}`;
    console.log(ans);
  }).catch(() => console.log('Signup system offline'));
}
