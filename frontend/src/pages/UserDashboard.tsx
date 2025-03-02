import  { useState } from 'react';
import { assets } from '../assets/assets';

interface UserDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  memberSince: string;
}

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
}

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}


const mockUser: UserDetails = {
  id: "user123",
  name: "Yasas Daraka",
  email: "yasas@gmail.com",
  phone: "+1 (555) 123-4567",
  avatarUrl: "/images/avatar.jpg",
  address: {
    street: "123 Main Street, Apt 4B",
    city: "Brooklyn",
    state: "NY",
    zipCode: "11201",
    country: "United States"
  },
  memberSince: "Jan 2022"
};

const mockOrders: Order[] = [
  {
    id: "ORD-12345",
    date: "Feb 20, 2025",
    status: "delivered",
    total: 129.99,
    items: [
      {
        id: "prod-1",
        name: "Wireless Headphones",
        quantity: 1,
        price: 89.99,
        image: assets.apple_earphone_image
      },
      {
        id: "prod-2",
        name: "Phone Case",
        quantity: 2,
        price: 19.99,
        image: assets.apple_earphone_image
      }
    ],
  },
  {
    id: "ORD-12346",
    date: "Feb 15, 2025",
    status: "shipped",
    total: 49.99,
    items: [
      {
        id: "prod-3",
        name: "Smart Watch Band",
        quantity: 1,
        price: 49.99,
        image: "/images/products/watch-band.jpg"
      }
    ],
  },
  {
    id: "ORD-12347",
    date: "Feb 10, 2025",
    status: "processing",
    total: 199.99,
    items: [
      {
        id: "prod-4",
        name: "Bluetooth Speaker",
        quantity: 1,
        price: 199.99,
        image: "/images/products/speaker.jpg"
      }
    ]
  }
];

const mockWishlist: WishlistItem[] = [
  {
    id: "wish-1",
    name: "Smart Home Hub",
    price: 149.99,
    image: "/images/products/smart-hub.jpg",
    inStock: true
  },
  {
    id: "wish-2",
    name: "Wireless Earbuds",
    price: 79.99,
    image: "/images/products/earbuds.jpg",
    inStock: true
  },
  {
    id: "wish-3",
    name: "Premium Laptop Sleeve",
    price: 39.99,
    image: "/images/products/laptop-sleeve.jpg",
    inStock: false
  }
];

export default function UserDashboard() {
  const [user] = useState<UserDetails>(mockUser);
  const [orders] = useState<Order[]>(mockOrders);
  const [wishlist] = useState<WishlistItem[]>(mockWishlist);
  const [activeTab, setActiveTab] = useState('profile');

  const getStatusBadgeStyle = (status: Order['status']) => {
    switch (status) {
      case 'processing': return 'bg-yellow-400 text-white';
      case 'shipped': return 'bg-blue-500 text-white';
      case 'delivered': return 'bg-green-500 text-white';
      case 'cancelled': return 'bg-red-500 text-white';
      default: return 'bg-gray-300 text-black';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt={user.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
        ) : (
          <div className="w-16 h-16 rounded-full mr-4 bg-gray-300 flex items-center justify-center text-2xl font-bold">{user.name.charAt(0)}</div>
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-500">{user.name}'s Dashboard</h1>
          <p className="text-sm text-gray-500">Member since {user.memberSince}</p>
        </div>
      </div>

      <div className="flex space-x-6 mb-6">
        {['profile', 'orders', 'wishlist', 'payments'].map(tab => (
          <button
            key={tab}
            className={`py-2 px-4 text-lg font-medium transition-colors  duration-300 ${activeTab === tab ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#EEF0F6]/60 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-600">Personal Information</h2>
            <p><strong className='text-gray-600'>Full Name:</strong> {user.name}</p>
            <p><strong className='text-gray-600'>Email Address:</strong> {user.email}</p>
            <p><strong className='text-gray-600'>Phone Number:</strong> {user.phone}</p>
            <button className="mt-4 bg-[#F88655] hover:bg-orange-500 transition text-white px-4 py-1 rounded-md">Edit Details</button>
          </div>

          <div className="bg-[#EEF0F6]/60 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-600">Shipping Address</h2>
            <p><strong className='text-gray-600'>Street Address:</strong> {user.address.street}</p>
            <p><strong className='text-gray-600'>City:</strong> {user.address.city}</p>
            <p><strong className='text-gray-600'>State:</strong> {user.address.state}</p>
            <p><strong className='text-gray-600'>Zip Code:</strong> {user.address.zipCode}</p>
            <p><strong className='text-gray-600'>Country:</strong> {user.address.country}</p>
            <button className="mt-4 bg-[#F88655] text-white hover:bg-orange-500 transition px-4 py-1 rounded-md">Edit Address</button>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="bg-[#EEF0F6]/50 shadow-lg rounded-lg p-6 border-t-2 border-t-[#eef0f6f6] ">
          <h2 className="text-xl font-semibold mb-4 text-gray-600">Order History</h2>
          {orders.length > 0 ? (
            orders.map(order => (
              <div key={order.id} className="mb-6 p-4 bg-[#EEF0F6]/90 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-orange-600">{order.id}</h3>
                  <span className={`py-1 px-3 rounded-full text-xs bg-orange-500/70 text-white`}>shipped</span>
                </div>
                <div className='flex flex-row justify-start items-center w-4/5'>
                  {order.items.map(item => (
                    <div key={item.id} className="flex items-center mb-2 mr-4 ">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4 rounded-md" />
                      <div>
                        <p className="font-medium text-gray-600">{item.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    {order.id && (
                      <p className="text-sm text-gray-600">
                        <span className="text-orange-600">Tracking : </span>
                        {order.id}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-medium text-gray-600">Total: ${order.total.toFixed(2)}</p>
                    <button className="text-orange-600">View Details</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No orders placed yet.</div>
          )}
        </div>
      )}

      {activeTab === 'wishlist' && (
        <div className="bg-[#EEF0F6]/50 border-t-2 border-t-[#eef0f6f6] shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-600">My Wishlist</h2>
          {wishlist.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map(item => (
                <div key={item.id} className="bg-[#EEF0F6]/90  border border-gray-200 rounded-lg p-4 shadow-sm">
                  <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-md mb-4" />
                  <div>
                    <h3 className="font-medium text-gray-600">{item.name}</h3>
                    <p className="text-lg font-medium text-gray-600">${item.price.toFixed(2)}</p>
                    <p className={`text-sm ${item.inStock ? 'text-green-500' : 'text-orange-500'}`}>
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                    <button 
                      className={`mt-4 ${item.inStock ? 'bg-[#F88655] text-white hover:bg-orange-500 transition' : 'bg-gray-300'} text-white px-4 py-1 rounded-md`}
                      disabled={!item.inStock}
                    >
                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">Your wishlist is empty.</div>
          )}
        </div>
      )}

    {activeTab === 'payments' && (
      <div className="bg-[#EEF0F6]/50 border-t-2 border-t-[#eef0f6f6] shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-600">Payment Methods</h2>
        <div className="bg-[#EEF0F6]/90 border border-gray-200 rounded-lg p-4 mb-4 flex flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-8 bg-blue-500/70 rounded-md"></div>
            <div>
              <p className="font-medium text-gray-600">Visa ending in 4242</p>
              <p className="text-sm text-gray-500">Expires 05/27</p>
            </div>
          </div>
          <span className="bg-orange-500/90 text-white py-1 px-3 text-xs rounded-full">Default</span>
        </div>

        <div className="bg-[#EEF0F6]/90 border border-gray-200 rounded-lg p-4 mb-4 flex flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-8 bg-orange-500/70 rounded-md"></div>
            <div>
              <p className="font-medium text-gray-600">Mastercard ending in 5555</p>
              <p className="text-sm text-gray-500">Expires 08/26</p>
            </div>
            </div>
          <button className="text-orange-500 font-medium text-sm mb-0.5">Make Default</button>
        </div>

      <button className="bg-[#F88655] text-white hover:bg-orange-500 transition px-4 py-1 rounded-md ml-0.5">Add Payment Method</button>
    </div>
    )}

    </div>
  );
}
