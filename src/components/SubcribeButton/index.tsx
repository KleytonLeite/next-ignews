import { signIn, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

interface SubcribeButtonProps {
    priceId: string,
}

export function SubscribeButton({ priceId }: SubcribeButtonProps) {
    const [session] = useSession()
    function handleSubscribe() {
        if(!session) {
            signIn('github')
            return
        }
    }
    return (
        <button
         type="button"
         className={styles.subscribeButton}
         onClick={handleSubscribe}
        >
         Subcribe now
        </button>
    )
}