import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useThemeTokens } from '@/theme';
import { FormField, PhotoPlaceholder } from '@/components/molecules';
import { AppText, Button, Chip, Divider, Heading } from '@/components/atoms';

export const CreateJobPage: React.FC = () => {
  const tokens = useThemeTokens();
  const [imageUri, setImageUri] = useState<string | undefined>();

  const selectFromLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const capturePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.8,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const submitMockJob = () => {
    Alert.alert('Listing queued', 'We added a mock job to the history feed.');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: tokens.colors.background }]}>      
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Heading style={[styles.heading, { color: tokens.colors.text }]}>Create listing draft</Heading>
        <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
          Pick a product photo, add optional notes, and preview the AI output immediately.
        </AppText>

        <PhotoPlaceholder
          uri={imageUri}
          onCapturePress={capturePhoto}
          onImportPress={selectFromLibrary}
          style={styles.photoPlaceholder}
        />

        <View style={styles.formSection}>
          <Heading level={3} style={[styles.subheading, { color: tokens.colors.text }]}>
            Listing preferences
          </Heading>
          <FormField
            label="Marketplace"
            helperText="Select where this listing will be published."
            inputProps={{
              placeholder: 'eBay, Facebook Marketplace, Vinted…',
            }}
          />
          <FormField
            label="Product notes"
            helperText="Mention sizing, defects, or shipping details."
            inputProps={{
              placeholder: 'Ex: Size M, small mark on sleeve, ships next-day',
              multiline: true,
              numberOfLines: 4,
            }}
          />
        </View>

        <Divider />

        <View style={styles.previewSection}>
          <Heading level={3} style={[styles.subheading, { color: tokens.colors.text }]}>
            Preview
          </Heading>
          <AppText variant="caption" style={{ color: tokens.colors.textSecondary }}>
            A preview will appear here once the AI job completes. In this mock mode we show a
            placeholder so you can visualise the flow.
          </AppText>
          <View
            style={[
              styles.previewCard,
              {
                borderColor: tokens.colors.border,
                backgroundColor: tokens.colors.surface,
              },
            ]}
          >
            <Heading level={3} style={{ color: tokens.colors.text }}>
              Vintage denim jacket – Size M
            </Heading>
            <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
              Distressed Levi’s trucker jacket in excellent vintage condition. Soft, broken-in denim
              with classic brass hardware. Ships worldwide.
            </AppText>
            <View style={styles.tagRow}>
              <Chip label="#denim" />
              <Chip label="#vintage" />
              <Chip label="#menswear" />
            </View>
          </View>
        </View>

        <Button label="Submit mock job" onPress={submitMockJob} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    gap: 24,
  },
  heading: {
    fontSize: 28,
  },
  subheading: {
    fontSize: 20,
  },
  formSection: {
    gap: 16,
    marginTop: 16,
  },
  previewSection: {
    gap: 12,
  },
  previewCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 10,
  },
  photoPlaceholder: {
    marginTop: 16,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});

