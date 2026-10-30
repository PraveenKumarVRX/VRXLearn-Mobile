import React from 'react';
import { Pressable, Text, ActivityIndicator } from 'react-native';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
};

export default function AppButton({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
}: AppButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={`p-2.5 w-full flex-row items-center justify-center rounded-xl border-2 ${
        isPrimary ? 'border-primary bg-primary' : 'border-primary bg-white'
      } ${disabled || loading ? 'opacity-60' : 'active:opacity-80'}`}
    >
      {loading ? (
        <ActivityIndicator
          color={isPrimary ? '#FFFFFF' : 'primary'}
          size="small"
        />
      ) : (
        <Text
          className={`text-h45 font-bold ${
            isPrimary ? 'text-white' : 'text-main'
          }`}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}
