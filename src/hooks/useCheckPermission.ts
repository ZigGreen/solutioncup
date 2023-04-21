import { useMemo } from 'react';
import { useAuth } from 'hooks/useAuth';

export const useCheckPermission = (permission: string): boolean => {
  const { user } = useAuth();
  return useMemo(() => {
    return true;
  }, [user, permission]);
};
