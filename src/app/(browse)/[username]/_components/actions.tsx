'use client';

import { Button } from '@/components/ui/button';
import { onFollow, onUnfollow } from '@/actions/follow';
import { useTransition } from 'react';
import { toast } from 'sonner';
import { onBlock } from '@/actions/block';

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

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) => toast.success(`${data.blocked.username} 차단`))
        .catch(() => {
          toast.error('에러가 발생했습니다.');
        });
    });
  };

  return (
    <>
      <Button variant='primary' disabled={isPending} onClick={handleFollowOrUnfollow}>
        {isFollowing ? '언팔로우' : '팔로우'}
      </Button>
      <Button disabled={isPending} onClick={handleBlock}>
        차단
      </Button>
    </>
  );
};
