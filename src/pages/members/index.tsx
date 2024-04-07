import Members from '@/components/Member/members';
import { bgColor } from '@/constants';

export default function MembersPage() {
    return (
        <>
            <section
                id="members"
                style={{
                    backgroundColor: bgColor,
                    padding: '100px 0',
                }}
            >
                <Members />
            </section>
        </>
    );
}
