"use client"
import FormHeader from '@/components/backend/form/FormHeader'
import SubmitButton from '@/components/backend/Forminputs/SubmitButton'
import TextareaInput from '@/components/backend/Forminputs/TextAreainput'
import TextInput from '@/components/backend/Forminputs/Textinput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import generateSlug from "@/lib/generateSlug";
import { generateSlug } from '@/lib/generateSlug'
import { makePostRequest } from '@/lib/apiRequest'
import ImageInput from '@/components/backend/Forminputs/Imageinput'
import SelectInput from '@/components/backend/Forminputs/SelectInput'
export default function NewProducts() {
  const [imageUrl, setImageUrl] = useState("")
  const catagories = [
    {
      id: 1,
      title: "Categories 1",
    },
    {
      id: 2,
      title: "Categories 2"
    }, {
      id: 3,
      title: "Categories 3"
    }, {
      id: 4,
      title: "Categories 4"
    }, {
      id: 5,
      title: "Categories 5"
    }, {
      id: 6,
      title: "Categories 6"
    },
  ]
  const farmers = [
    {
      id: 1,
      title: "farmers 1",
    },
    {
      id: 2,
      title: "farmers 2"
    }, {
      id: 3,
      title: "farmers 3"
    }, {
      id: 4,
      title: "farmers 4"
    }, {
      id: 5,
      title: "farmers 5"
    }, {
      id: 6,
      title: "farmers 6"
    },
  ]
  const [loading, setLoading] = useState(false)
  const { register, reset, handleSubmit, formState: { errors } } = useForm()
  async function onSubmit(data) {
    {/* 
        -id =>auto ()
        -title
        -description
        -image/images
        -slug => auto ()
        -barcode
        -sku
        -productsPrice
        -saslePrice
        -farmer
        -category
        -tags[]
    */}

    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl
    data.status = ''
    console.log(data)
    makePostRequest(
      setLoading,
      'api/categories',
      data,
      "Products",
      reset
    );
    setImageUrl("")
  }
  return (
    <div>
      <FormHeader title="New Categroy" />
      {/* Form     */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Products Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Products SKU"
            name="sku"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="Products Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="Products Price(Before Discount)"
            name="productsPrice"
            type='number'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="Products Sale Price (Discounted) "
            name="salePrice"
            type='number'
            register={register}
            errors={errors}
            className='w-full'
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className='w-full'
            options={catagories}
            // multiple={false}
          />
          <SelectInput
            label="Select Farmer"
            name="FGarmerId"
            register={register}
            errors={errors}
            className='w-full'
            options={farmers}
            // multiple={false}
          />
          <TextareaInput
            label="Products Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='productsImageUploader'
            label="Products Image"
          />
          <TextareaInput
            label="Products Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Products"
          loadingButtonTitle="Creating Products please wait..."
        />
      </form>
    </div>
  )
}
