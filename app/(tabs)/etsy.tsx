import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function EtsyScreen() {
  const handleSearch = () => {
    Alert.alert('Search', 'Search functionality coming soon!');
  };

  const handleCategory = (category: string) => {
    Alert.alert('Category', `${category} category coming soon!`);
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>
          Etsy Marketplace
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Discover unique handmade items
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <IconSymbol name="magnifyingglass" size={20} color="#666" />
          <ThemedText style={styles.searchText}>Search for anything...</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.categoriesContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Popular Categories
        </ThemedText>
        
        <ThemedView style={styles.categoriesGrid}>
          {[
            { name: 'Jewelry', icon: 'sparkles' },
            { name: 'Home & Living', icon: 'house' },
            { name: 'Art & Collectibles', icon: 'paintbrush' },
            { name: 'Clothing', icon: 'tshirt' },
            { name: 'Craft Supplies', icon: 'hammer' },
            { name: 'Wedding', icon: 'heart' },
          ].map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={() => handleCategory(category.name)}
            >
              <IconSymbol name={category.icon} size={24} color="#E55100" />
              <ThemedText style={styles.categoryText}>{category.name}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.featuredContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Featured Items
        </ThemedText>
        
        <ThemedView style={styles.featuredItem}>
          <ThemedView style={styles.placeholderImage}>
            <IconSymbol name="photo" size={40} color="#ccc" />
          </ThemedView>
          <ThemedText style={styles.itemTitle}>Handmade Ceramic Mug</ThemedText>
          <ThemedText style={styles.itemPrice}>$24.99</ThemedText>
        </ThemedView>

        <ThemedView style={styles.featuredItem}>
          <ThemedView style={styles.placeholderImage}>
            <IconSymbol name="photo" size={40} color="#ccc" />
          </ThemedView>
          <ThemedText style={styles.itemTitle}>Vintage Style Necklace</ThemedText>
          <ThemedText style={styles.itemPrice}>$18.50</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.footer}>
        <ThemedText style={styles.footerText}>
          More features coming soon!
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    padding: 20,
    backgroundColor: '#E55100',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    opacity: 0.9,
  },
  searchContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 16,
  },
  categoriesContainer: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 10,
  },
  sectionTitle: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '30%',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
  featuredContainer: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 10,
  },
  featuredItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  placeholderImage: {
    height: 120,
    backgroundColor: '#eee',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E55100',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
});
