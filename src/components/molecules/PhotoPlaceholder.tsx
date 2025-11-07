import React from 'react';
import { View, StyleSheet, ViewProps, Image } from 'react-native';
import { AppText, Button } from '@/components/atoms';
import { useThemeTokens } from '@/theme';

interface PhotoPlaceholderProps extends ViewProps {
  uri?: string;
  onCapturePress?: () => void;
  onImportPress?: () => void;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  uri,
  onCapturePress,
  onImportPress,
  style,
  ...props
}) => {
  const tokens = useThemeTokens();
  const hasImage = Boolean(uri);

  return (
    <View
      {...props}
      style={[
        styles.container,
        {
          borderColor: tokens.colors.border,
          backgroundColor: tokens.colors.surface,
        },
        style,
      ]}
    >
      {hasImage ? (
        <Image source={{ uri: uri as string }} style={styles.image} />
      ) : (
        <AppText variant="caption" style={{ color: tokens.colors.textSecondary }}>
          Upload a product photo to get started
        </AppText>
      )}
      <View style={styles.actions}>
        <Button
          label={hasImage ? 'Retake Photo' : 'Capture Photo'}
          variant="primary"
          onPress={onCapturePress}
        />
        <Button
          label={hasImage ? 'Replace with Library Photo' : 'Import from Library'}
          variant="secondary"
          onPress={onImportPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    backgroundColor: '#1C1E24',
  },
  actions: {
    width: '100%',
    gap: 12,
  },
});

