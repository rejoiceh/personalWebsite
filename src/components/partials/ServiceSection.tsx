import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import { services } from '@/data/services';
import Link from 'next/link';
import { FiLinkedin, FiFileText, FiGithub } from 'react-icons/fi';

const ServiceSection = () => {
  return (
    <>
      <SectionTitle>Leadership & Activities</SectionTitle>
      <div className="mt-10 grid gap-8 md:grid-cols-3 xl:grid-cols-5">
        {services.map((service, index) => (
          <div
            key={index}
            className='rounded-2xl py-8 px-4 text-center items-center shadow-md md:px-8 bg-white dark:bg-gray-700'
          >
            <Image src={service.image} height={80} width={80} alt={service.name} />
            <h4 className="mt-4 text-xl font-semibold">{service.name}</h4>
            <p className="mt-4">{service.description}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="mt-8 text-center">
          Interested? Email me at rhu712 (at) gmail (dot) com! &#128079;
        </p>
        <div className="mt-4  items-center justify-center flex gap-5">
          <Link href="https://linkedin.com/in/rejoice-hu">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white">
              <FiLinkedin size={25} />
            </a>
          </Link>

          <Link href="https://drive.google.com/file/d/186dzx3x3P2li9JsoyU477m6kz0_Nt5XB/view?usp=sharing">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white">
              <FiFileText size={25} />
            </a>
          </Link>

          <Link href="https://github.com/rejoiceh">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white">
              <FiGithub size={25} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
