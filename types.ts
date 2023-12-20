import { Server, Member, Profile } from '@prisma/client';

export type SErverWithMembersWithProfiles = Server & {
    members:(Member & {profile:Profile})[]
}