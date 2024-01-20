//icons
import NumbersIcon from '@mui/icons-material/Numbers';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const SingleParticipant = ({ participant }) => {
    const {id, first_name, last_name, email, phone} = participant;
   
    return (
        <div>
            <div>{`${first_name} ${last_name}`}</div>
            <div><NumbersIcon /> {id}</div>
            <div><EmailIcon /> {email}</div>
            <div><LocalPhoneIcon /> {phone}</div>
        </div>
    );
};

export default SingleParticipant;