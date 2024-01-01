import { db } from './db';
import { getSelf } from './auth-service';

export const getRecommended = async () => {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  let users = [];

  // 현재 접속한 유저는 추천 유저 목록에서 제외
  if (userId) {
    users = await db.user.findMany({
      where: {
        NOT: {
          id: userId,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  return users;
};
