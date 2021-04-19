
import { useSession, signIn } from 'next-auth/client';
import styles from './styles.module.scss';


interface SubscribeButtonProps {
    PriceId: string;
}

export function SubscribeButton ({PriceId}:SubscribeButtonProps) {
    const [session] = useSession();
   
    function handleSubscribe() {
        if (!session) {
            signIn('github')
            return;
        }

}


    return (
<button
    type="button" 
    className={styles.subscribeButton}
    onClick={handleSubscribe}>
        Assine já

</button>

    );

}