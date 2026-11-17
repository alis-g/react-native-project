import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const categories = [
  { id: 1, name: 'All', icon: '✨' },
  { id: 2, name: 'Clothes', icon: '👕' },
  { id: 3, name: 'Shoes', icon: '👟' },
  { id: 4, name: 'Bags', icon: '👜' },
  { id: 5, name: 'Accessories', icon: '⌚' },
];

const products = [
  {
    id: 1,
    name: 'Classic Sneakers',
    price: '$89.99',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
  },
  {
    id: 2,
    name: 'Minimal Watch',
    price: '$129.99',
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600',
  },
  {
    id: 3,
    name: 'Leather Backpack',
    price: '$74.99',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
  },
  {
    id: 4,
    name: 'Basic Hoodie',
    price: '$59.99',
    image:
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>
              Welcome back 👋
            </Text>

            <Text style={styles.logo}>
              SHOPLY
            </Text>
          </View>

          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartIcon}>🛒</Text>

            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            placeholder="Search products..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Categories
          </Text>

          <Text style={styles.seeAll}>
            See all
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.category,
                index === 0 && styles.activeCategory,
              ]}
            >
              <Text style={styles.categoryIcon}>
                {category.icon}
              </Text>

              <Text
                style={[
                  styles.categoryText,
                  index === 0 && styles.activeCategoryText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerSmall}>
              LIMITED OFFER
            </Text>

            <Text style={styles.bannerTitle}>
              Summer{'\n'}Collection
            </Text>

            <Text style={styles.bannerSubtitle}>
              Up to 40% OFF
            </Text>

            <TouchableOpacity style={styles.shopButton}>
              <Text style={styles.shopButtonText}>
                Shop now
              </Text>
            </TouchableOpacity>
          </View>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800',
            }}
            style={styles.bannerImage}
          />
        </View>

        {/* Products Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Popular products
          </Text>

          <Text style={styles.seeAll}>
            See all
          </Text>
        </View>

        {/* Products */}
        <View style={styles.productGrid}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              activeOpacity={0.8}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.productImage}
                />

                <TouchableOpacity
                  style={styles.favoriteButton}
                >
                  <Text style={styles.favoriteIcon}>
                    ♡
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.productInfo}>
                <Text style={styles.productName}>
                  {product.name}
                </Text>

                <View style={styles.priceRow}>
                  <Text style={styles.price}>
                    {product.price}
                  </Text>

                  <TouchableOpacity
                    style={styles.addButton}
                  >
                    <Text style={styles.addButtonText}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    marginBottom: 20,
  },

  smallText: {
    fontSize: 13,
    color: '#888',
    marginBottom: 3,
  },

  logo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111',
    letterSpacing: 1,
  },

  cartButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cartIcon: {
    fontSize: 21,
  },

  cartBadge: {
    position: 'absolute',
    right: -2,
    top: -3,
    width: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cartBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '700',
  },

  searchContainer: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 28,
  },

  searchIcon: {
    fontSize: 27,
    color: '#777',
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#111',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#111',
  },

  seeAll: {
    fontSize: 13,
    color: '#777',
    fontWeight: '600',
  },

  categories: {
    paddingBottom: 28,
  },

  category: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginRight: 10,
    alignItems: 'center',
    minWidth: 75,
  },

  activeCategory: {
    backgroundColor: '#111',
  },

  categoryIcon: {
    fontSize: 21,
    marginBottom: 5,
  },

  categoryText: {
    fontSize: 12,
    color: '#555',
    fontWeight: '600',
  },

  activeCategoryText: {
    color: '#FFFFFF',
  },

  banner: {
    height: 205,
    backgroundColor: '#E5E5E5',
    borderRadius: 24,
    overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: 30,
  },

  bannerContent: {
    width: '58%',
    padding: 22,
    zIndex: 2,
  },

  bannerSmall: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    color: '#666',
    marginBottom: 8,
  },

  bannerTitle: {
    fontSize: 27,
    lineHeight: 29,
    fontWeight: '800',
    color: '#111',
    marginBottom: 7,
  },

  bannerSubtitle: {
    fontSize: 13,
    color: '#444',
    marginBottom: 14,
  },

  shopButton: {
    backgroundColor: '#111',
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },

  shopButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },

  bannerImage: {
    position: 'absolute',
    right: 0,
    width: '55%',
    height: '100%',
  },

  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
  },

  imageContainer: {
    height: 175,
    position: 'relative',
    backgroundColor: '#F0F0F0',
  },

  productImage: {
    width: '100%',
    height: '100%',
  },

  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  favoriteIcon: {
    fontSize: 20,
    color: '#222',
  },

  productInfo: {
    padding: 12,
  },

  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 10,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111',
  },

  addButton: {
    width: 32,
    height: 32,
    borderRadius: 11,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    color: '#FFF',
    fontSize: 22,
    lineHeight: 23,
  },
});