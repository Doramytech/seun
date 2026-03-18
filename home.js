
const headerContent = document.querySelector(".headerContent"); 
const menu = document.getElementById("menu");                      
const body = document.body;                                       

// When hamburger is clicked
menu.addEventListener("click", () => {
    
    headerContent.classList.toggle("open");
  
    menu.classList.toggle("open");
    

    body.classList.toggle("no-scroll");
    
    console.log("Menu clicked!");  
});

const products = [
            {
                id: "0",
                image: 'img/WhatsApp Image 2026-03-16 at 9.34.51 PM (1).jpeg',
                title: 'Fluffy fur cap',
                price: 6500,
                category: 'electronics'
            },
            {
                id: "1",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.03 PM (2).jpeg',
                title: 'Dignife woman perfume',
                price: 10500,
                category: 'perfume'
            },
            {
                id: "2",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.03 PM.jpeg',
                title: 'Shoe rack',
                price: 21000,
                category: 'accessories'
            },
            {
                id: "3",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.04 PM (1).jpeg',
                title: '10 inches LCD writting tab',
                price: 6000,
                category: 'electronics'
            },
            {
                id: "4",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.04 PM (2).jpeg',
                title: 'Rechargeable PRO LED 800 Light with 2.1 meter tripod stand',
                price: 44000,
                category: 'electronics'
            },
            {
                id: "5",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.04 PM.jpeg',
                title: '12 inches LCD writing tab',
                price: 7000,
                category: 'electronics'
            },
            {
                id: "6",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.05 PM (1).jpeg',
                title: 'Men gift set with power bank',
                price: 22000,
                category: 'accessories'
            },
            {
                id: "7",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.05 PM (2).jpeg',
                title: 'Men gift set',
                price: 22000,
                category: 'furniture'
            },
            {
                id: "8",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.05 PM.jpeg',
                title: 'Rechargeable PRO LED 600 Light with 2.1 meter tripod stand',
                price: 39000,
                category: 'bathroom'
            },
            {
                id: "9",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.03 PM (1).jpeg',
                title: 'Hand bag',
                price: 12000,
                category: 'bag'
            },
            {
                id: "10",
                image: 'img/WhatsApp Image 2026-03-16 at 9.34.53 PM.jpeg',
                title: '2 in 1 Bath towel set super soft highly absorbent',
                price: 5500,
                category: 'clothing'
            },
            {
                id: "12",
                image: 'img/WhatsApp Image 2026-03-16 at 9.34.53 PM (1).jpeg',
                title: 'Clothing racks',
                price: 17000,
                category: 'clothing'
            },
                  {
                id: "13",
                image: 'img/WhatsApp Image 2026-03-16 at 9.34.52 PM.jpeg',
                title: 'Fluffy fur cap',
                price: 6500,
                category: 'clothing'
            },
                {
                id: "14",
                image: 'img/WhatsApp Image 2026-03-16 at 9.34.51 PM.jpeg',
                title: 'Fluffy fur cap',
                price: 6500,
                category: 'clothing'
            },
            {
                id: "15",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.06 PM (1).jpeg',
                title: 'Juliana watch set',
                price: 9999,
                category: 'accessory'
            }, 
            {
                id: "16",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.06 PM (2).jpeg',
                title: 'Eternal love couples watch and bracelet set',
                price: 23000,
                category: 'accessory'
            },
            {
                id: "17",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.06 PM (3).jpeg',
                title: '5pcs Blue eye watch set',
                price: 9500,
                category: 'accessory'
            },
             {
                id: "18",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.07 PM (1).jpeg',
                title: '3 in 1 UV Led Manicure and Pedicure Nail Lamp',
                price: 23000,
                category: 'accessory'
            },
                 {
                id: "19",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.07 PM (2).jpeg',
                title: '3 in 1 UV Led Manicure and Pedicure Nail Lamp',
                price: 23000,
                category: 'accessory'
            },
                 {
                id: "18",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.07 PM.jpeg',
                title: 'Knight and princess couples watch and bracelet set',
                price: 23000,
                category: 'accessory'
            },
             {
                id: "19",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.08 PM (1).jpeg',
                title: 'HQNova Professional Curling Iron',
                price: 12000,
                category: 'accessory'
            },
             {
                id: "20",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.08 PM (2).jpeg',
                title: 'Twin Swan Contrast home decor',
                price: 31000,
                category: 'accessory'
            },
              {
                id: "21",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.08 PM.jpeg',
                title: 'Mini True Wireless Stero earbuds',
                price: 8500,
                category: 'accessory'
            },
              {
                id: "22",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.09 PM (1).jpeg',
                title: 'Closed faux book',
                price: 5000,
                category: 'book'
            },
              {
                id: "23",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.09 PM.jpeg',
                title: 'Portable mini BT printer',
                price: 17000,
                category: 'accessory'
            },
              {
                id: "24",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.10 PM (1).jpeg',
                title: 'Rechar',
                price: 31000,
                category: 'accessory'
            },
                          {
                id: "24",
                image: 'img/WhatsApp Image 2026-03-16 at 9.35.10 PM (2).jpeg',
                title: 'Rechar',
                price: 31000,
                category: 'accessory'
            }
        ];

        let currentCategory = 'all';
        let searchTerm = '';

        // Search Functionality
        document.getElementById('searchBar').addEventListener('keyup', (e) => {
            searchTerm = e.target.value.toLowerCase();
            applyFilters();
        });

              document.getElementById('searchBars').addEventListener('keyup', (e) => {
            searchTerm = e.target.value.toLowerCase();
            applyFilters();
        });

        // Category Filter Function
        function filterByCategory(category) {
            currentCategory = category;
            
            // Update active button state
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent.toLowerCase() === category) {
                    btn.classList.add('active');
                }
            });
            
            applyFilters();
        }

        // Combined Filter Logic
        function applyFilters() {
            let filtered = products;

            // Apply category filter
            if (currentCategory !== 'all') {
                filtered = filtered.filter(item => item.category === currentCategory);
            }

            // Apply search filter
            if (searchTerm) {
                filtered = filtered.filter(item => 
                    item.title.toLowerCase().includes(searchTerm)
                );
            }

            displayItems(filtered);
        }

        // Display Function
        function displayItems(items) {
            const root = document.getElementById('root');
            
            if (items.length === 0) {
                root.innerHTML = '<div class="no-results">No products found</div>';
                return;
            }

            root.innerHTML = items.map((item) => {
                const { image, title, price, category } = item;
                
                return `
                    <div class='box'>
                        <div class="img-box">
                            <span class="category-tag">${category}</span>
                            <img class='images' src="${image}" alt="${title}" 
                                 onerror="this.src='https://via.placeholder.com/400x250?text=No+Image'">
                        </div>
                        <div class='bottom'>
                            <p>${title}</p>
                            <h2>₦  ${price.toLocaleString()}.00</h2>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Add to Cart Function
        function addToCart(productTitle) {
            alert(`Added "${productTitle}" to cart!`);
        }

        // Initialize display
        displayItems(products);


