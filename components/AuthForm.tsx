"use client"
import {z} from 'zod'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from 'next/image'

const formSchema = z.object({
  username:z.string().min(3).max(50)
})
interface AuthFormProps {
  type: string;
}

const AuthForm:React.FC<AuthFormProps> = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  
  
  return (
    <div className='card-border lg:min-w-[566px]'>
      <div className='flex flex-col gap-6 card py-14 px-10'>
        <div className='flex flex-row gap-2 justify-center'>
          <Image src="/logo.svg" alt='logo' height={32} width={38}/>
          <h2 className='text-primary-100'>PrepMate</h2>
        </div>
        <h3 className='text-primary-60'>Practice Job Interviews With AI</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      </div>

    </div>
  )
}

export default AuthForm