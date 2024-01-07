'use client';

import { Button } from '@/components/ui/button';
import { onFollow, onUnfollow } from '@/actions/follow';
import { useTransition } from 'react';
import { toast } from 'sonner';

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollowOrUnfollow = () => {
    startTransition(() => {
      const cb = isFollowing ? onUnfollow : onFollow;

      cb(userId)
        .then((data) => toast.success(`${data.following.username} ${isFollowing && '언'}팔로잉 하였습니다.`))
        .catch(() => {
          toast.error('Something went wrong');
        });
    });
  };

  return (
    <Button variant='primary' disabled={isPending} onClick={handleFollowOrUnfollow}>
      {isFollowing ? '언팔로우' : '팔로우'}
    </Button>
  );
};
