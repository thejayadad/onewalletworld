'use client'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { AiOutlineFileImage } from 'react-icons/ai';

const EditProduct = (ctx) => {
  const CLOUD_NAME = 'socialsite';
  const UPLOAD_PRESET = 'marketsite';
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [photo, setPhoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:3000/api/product/${ctx.params.id}`);
        const product = await res.json();
        setTitle(product?.title || '');
        setDesc(product?.desc || '');
        setPrice(product?.price || '');
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    fetchProduct();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === '' || price === '' || desc === '') {
      toast.error('All fields are required');
      return;
    }

    try {
      let images = null;
      if (photo) {
        images = await uploadImage();
      }

      const body = {
        title,
        desc,
        price,
      };

      if (images != null) {
        body.images = images;
      }

      const response = await fetch(`http://localhost:3000/api/product/${ctx.params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Error has occurred');
      }

      const product = await response.json();

      router.push("/dashboard/products"); // Redirect to dashboard/products after successful update
    } catch (error) {
      console.error(error);
    }
  };

  const uploadImage = async () => {
    if (!photo) return;

    const formData = new FormData();

    formData.append('file', photo);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Error uploading image to Cloudinary');
      }

      const data = await res.json();

      const images = data['secure_url'];

      return images;
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="desc"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Upload Image <AiOutlineFileImage />
          </label>
          <input
            id="image"
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {previewUrl && (
            <div className="mt-2">
              <img
                src={previewUrl}
                alt="Image Preview"
                className="w-full h-40 object-contain rounded-md"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-gray-500 text-white py-2 rounded hover:bg-gray-700 transition duration-300 w-full"
        >
          Create
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default EditProduct;
