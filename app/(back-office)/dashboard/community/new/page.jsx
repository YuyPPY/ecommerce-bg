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
import ToggleInput from '@/components/backend/Forminputs/Toggleinput'
import QuillEditor from '@/components/backend/Forminputs/QuillEditor'

export default function NewTranining() {
  const [imageUrl, setImageUrl] = useState("")
  const categories = [
    {
      id: 1,
      title: "SD Farmers Market"
    },
    {
      id: 2,
      title: "OP Farmers Market"
    }, {
      id: 3,
      title: "IP Farmers Market"
    }, {
      id: 4,
      title: "KO Farmers Market"
    }, {
      id: 5,
      title: "LO Farmers Market"
    }, {
      id: 6,
      title: "PT Farmers Market"
    },
  ]
  const [loading, setLoading] = useState(false)
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      isActive: true,
    }
  });

  // Quill Editor
  const [content, setContent] = useState('')
  // Quill Editor end

  const isActive = watch('isActive')
  async function onSubmit(data) {
    {/* 
        -id => auto()
        -title
        -expertId
        -categoryId
        -slug => auto()
        -description
        -content => richText
        -image
    */}

    const slug = generateSlug(data.title)
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content= content;
    console.log(data)
    makePostRequest(
      setLoading,
      'api/trainings',
      data,
      "Category",
      reset
    );
    setImageUrl("")
    setContent("")
  }
  return (
    <div>
      <FormHeader title="New Training" />
      {/* Form     */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Training Title"
            name="title"
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
            options={categories}
          />
          <TextareaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='trainindImageUploader'
            label="Training Thumbnail"
          />
          {/* content */}
          <QuillEditor
            label="Training Content"
            value={content}
            onChange={setContent} />
          {/* Content  End*/}
          <ToggleInput
            label="Publish your Product"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />

        </div>
        <SubmitButton
          isLoading={loading}

          buttonTitle="Create Tranining"
          loadingButtonTitle="Creating Tranining please wait..."
        />
      </form>
    </div>
  )
}
